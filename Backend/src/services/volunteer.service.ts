// volunteer.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Volunteer } from 'src/entitices/volunteer.entities';
import { CreateVolunteerDto } from 'src/pet.dto';

@Injectable()
export class VolunteerService {
  constructor(
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>,
  ) {}

  // สร้างข้อมูลอาสาสมัครใหม่
  async create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    const volunteer = this.volunteerRepository.create(createVolunteerDto);
    return await this.volunteerRepository.save(volunteer);
  }

  // ดึงข้อมูลอาสาสมัครทั้งหมด
  async findAll(): Promise<Volunteer[]> {
    return await this.volunteerRepository.find();
  }

  // ดึงข้อมูลอาสาสมัครตาม id
  async findOne(id: number): Promise<Volunteer> {
    return await this.volunteerRepository.findOneBy({ id });
  }

  // อัพเดตข้อมูลอาสาสมัคร
  async update(id: number, updateVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    await this.volunteerRepository.update(id, updateVolunteerDto);
    return this.findOne(id);
  }

  // ลบข้อมูลอาสาสมัคร
  async remove(id: number): Promise<void> {
    await this.volunteerRepository.delete(id);
  }
}
