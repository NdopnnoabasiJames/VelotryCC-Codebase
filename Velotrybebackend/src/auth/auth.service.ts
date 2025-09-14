import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/schema/user.schema';
import { CreateUserDto, LoginDto } from 'src/user/dto/create-user.dto';
import { MailService } from 'src/mail/mail.service';
import { SmsService } from 'src/sms/sms.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private mailService: MailService,
    private smsService: SmsService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const { firstName, lastName, password, email, phone, ...rest} = createUserDto;
    
    // Check for duplicate phone number
    const existingUserByPhone = await this.userModel.findOne({ phone });
    if (existingUserByPhone) {
      throw new BadRequestException('User with this phone number already exists');
    }

    // Check for duplicate email
    const existingUserByEmail = await this.userModel.findOne({ email });
    if (existingUserByEmail) {
      throw new BadRequestException('User with this email already exists');
    }

    try {
      // Hash password and create user
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new this.userModel({
        firstName,
        lastName,
        phone,
        email,
        password: hashedPassword,
        approvalStatus: 'pending',
        ...rest,
      });
      const savedUser = await newUser.save();
      return {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
        phone: savedUser.phone,
        role: savedUser.role,
        isActive: savedUser.isActive,
        approvalStatus: savedUser.approvalStatus,
        message: 'User created successfully. Awaiting admin approval.'
      };
    } catch (mongoError) {
      // Handle MongoDB duplicate key errors that might slip through
      if (mongoError.code === 11000) {
        if (mongoError.keyPattern?.email) {
          throw new BadRequestException('User with this email already exists');
        }
        if (mongoError.keyPattern?.phone) {
          throw new BadRequestException('User with this phone number already exists');
        }
        throw new BadRequestException('User with these details already exists');
      }
      // Re-throw other MongoDB errors
      throw mongoError;
    }
  }

  async logIn(loginUserDto: LoginDto) {
    const { phone, password } = loginUserDto;
    
    const user = await this.userModel.findOne({ phone });
    
    // Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    // Check if user is approved
    if (user.approvalStatus !== 'approved') {
      throw new ForbiddenException('Account not approved. Please wait for admin approval.');
    }
    
    const payload = { id: user._id, role: user.role, phone: user.phone, email: user.email };

    const accessToken = await this.jwtService.sign(payload);

    return {
      message: `${user.firstName} ${user.lastName} is logged in successfully`,
      access_token: accessToken,
    };  
  }

  // ...existing code...
}
