// import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    // @ApiProperty({ example: 'user@ukr.net', description: 'unique email' })
    readonly value: string;

    // @ApiProperty({ example: '12345678', description: 'password' })
    readonly description: string;
}