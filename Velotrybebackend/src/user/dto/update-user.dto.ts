import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
	emergencyContact?: string;
	approvalStatus?: 'pending' | 'approved' | 'rejected';
}
