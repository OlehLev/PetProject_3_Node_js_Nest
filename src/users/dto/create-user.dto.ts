import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'user@ukr.net', description: 'unique email' })
    @IsString({ message: "must be a string" })
    @IsEmail( {}, { message: 'Invalid email' })
    readonly email: string;

    @ApiProperty({ example: '12345678', description: 'password' })
    @IsString({ message: "must be a string" })
    @Length( 4, 16, { message: 'password is less than 4 or greater than 16' })
    readonly password: string;
}