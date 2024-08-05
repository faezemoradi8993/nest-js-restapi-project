import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user.entity';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name: string): User[] {
    return this.usersService.findAll(name);
  }
  @ApiOkResponse({ type: User, isArray: false, description: 'the user' })
  @Get(':id')
  getUserById(@Param('id') id: User['id']): User {
    //ToDo : auto parse id
    return this.usersService.findById(Number(id));
  }
  @ApiCreatedResponse({ type: User })
  @Post('')
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
