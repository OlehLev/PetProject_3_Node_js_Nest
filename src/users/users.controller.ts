import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { log } from 'console';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){};

    @ApiOperation({ summary: 'create user' })
    @ApiResponse({ status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {      
        return this.usersService.createUser(userDto)
    };

    @ApiOperation({ summary: 'get all users' })
    @ApiResponse({ status: 200, type: [User]})
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }
}
