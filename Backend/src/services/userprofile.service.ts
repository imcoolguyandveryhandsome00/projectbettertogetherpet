// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Userprofile } from 'src/entitices/userprofile';
import { EditUserProfileDto } from 'src/pet.dto';

@Injectable()
export class UserprofileService {
  constructor(
    @InjectRepository(Userprofile)
    private usersRepository: Repository<Userprofile>,
  ) {}
  async editUserProfile(userId: number, editUserProfileDto: EditUserProfileDto): Promise<Userprofile> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });// ทำการค้นหาโดยใช้ userId ตรงๆ
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    Object.assign(user, editUserProfileDto);
    return this.usersRepository.save(user);
  }
  
}
