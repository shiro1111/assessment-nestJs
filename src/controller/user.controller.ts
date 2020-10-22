import { Controller, Get, Post, Body, Put, Delete, Param, UseFilters } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('all')
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.userService.getUser(id);
  }

  @Post('register')
  async createUser(@Body() user: any) {
    return await this.userService.createUser(user);
  }

  @Put('update')
  async updateUser(@Body() user: any) {
    return await this.userService.updateUser(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
