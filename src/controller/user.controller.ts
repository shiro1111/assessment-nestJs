import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAll() {
    return  await this.userService.getAll();
  }
  
  @Post('register')
  async createUser(@Body() user: any ){
    return await this.userService.createUser(user);
  }
  
  @Put('update')
  async updateUser(@Body() user: any ){
    return await this.userService.updateUser(user);
  }
  
  @Delete('delete/:id')
  async deleteUser(@Param('id') id: string ){
    return await this.userService.deleteUser(id);
  }
}
