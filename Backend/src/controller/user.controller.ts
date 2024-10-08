import { Body, Controller, Get, Param, Post, Put, Req, Delete, Request } from "@nestjs/common";
import User from "src/entitices/user.entities"; // แก้จาก entitices เป็น entities
import { CreateUserDTO, UpdateUserDTO } from "src/pet.dto";
import { UserService } from "src/services/user.service";
import { Role } from "src/auth/role.enum";
import { Roles } from "src/auth/roles.decorator";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('status')
  getStatus(): string {
    return this.userService.getStatus();
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> { 
    return this.userService.findOne(parseInt(id)); // แปลงเป็น number
  }

  @Post()
  postCreate(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.userService.create(createUserDTO);
  }

  @Put(':id')
  async updateUserById(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO): Promise<User> {
    return this.userService.update(parseInt(id), updateUserDTO); // แปลงเป็น number
  }

  @Delete(":id")
  async deleteUserById(@Param('id') id: string): Promise<string> {
    await this.userService.deleteById(parseInt(id)); // แปลงเป็น number
    return "OK, So Good";
  }

  @Roles(Role.Admin, Role.User)
  @Get('bothUsers')
  bothRoles() {
    return 'Both User and Admin and Volunteer';
  }

  @Roles(Role.Admin)
  @Get('onlyadmin')
  onlyAdmin() {
    return 'Only Admin';
  }

  @Roles(Role.User)
  @Get('onlyuser')
  onlyUser() {
    return 'Only User';
  }

  @Roles(Role.User)
  @Get('onlyvolunteer')
  onlyVolunteer() {
    return 'Only Volunteer';
  }
}
