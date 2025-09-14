import {
  Controller,
  Post,
  Body,
  BadRequestException,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';

import { CreateUserDto, LoginDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.authService.signUp(createUserDto);
      return [`user created Successfully`, user];
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('Error creating user:', error);
      throw new InternalServerErrorException('Error creating user');
    }
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginDto) {
    return this.authService.logIn(loginUserDto);
  }
  
  
  // ...existing code...
}
