import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'user@ukr.net', description: 'unique email' })
    readonly email: string;

    @ApiProperty({ example: '12345678', description: 'password' })
    readonly password: string;
}