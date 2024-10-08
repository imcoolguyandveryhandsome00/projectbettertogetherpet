// src/users/users.controller.ts
import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UserprofileService } from 'src/services/userprofile.service';
import { EditUserProfileDto } from 'src/pet.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserprofileController {
  constructor(private readonly userprofileService: UserprofileService) {}

  @UseGuards(AuthGuard('jwt')) // ใช้การตรวจสอบความปลอดภัย
  
  @Patch(':id/edit-profile')
  async editUserProfile(
    @Param('id') id: number,
    @Body() editUserProfileDto: EditUserProfileDto,
  ) {
    return this.userprofileService.editUserProfile(id, editUserProfileDto);
  }
}
