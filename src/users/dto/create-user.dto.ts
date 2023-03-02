import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'test@mail.com', description: 'User email' })
    @IsString({ message: 'Must be a string' })
    @IsEmail({}, { message: 'Must be a valid email' })
    readonly email: string;

    @ApiProperty({ example: 'password1234', description: 'Password' })
    @IsString({ message: 'Must be a string' })
    @Length(4, 16, { message: '4 to 16 length is required' })
    readonly password: string;
}