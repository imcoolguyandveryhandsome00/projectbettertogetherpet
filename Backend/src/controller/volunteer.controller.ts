// volunteer.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VolunteerService } from 'src/services/volunteer.service';
import { CreateVolunteerDto } from 'src/pet.dto';
import { Volunteer } from 'src/entitices/volunteer.entities';

@Controller('volunteers')
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  // สร้างข้อมูลอาสาสมัครใหม่
  @Post()
  create(@Body() createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    return this.volunteerService.create(createVolunteerDto);
  }

  // ดึงข้อมูลอาสาสมัครทั้งหมด
  @Get()
  findAll(): Promise<Volunteer[]> {
    return this.volunteerService.findAll();
  }

  // ดึงข้อมูลอาสาสมัครตาม id
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Volunteer> {
    return this.volunteerService.findOne(+id);
  }

  // อัพเดตข้อมูลอาสาสมัคร
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateVolunteerDto: CreateVolunteerDto,
  ): Promise<Volunteer> {
    return this.volunteerService.update(+id, updateVolunteerDto);
  }

  // ลบข้อมูลอาสาสมัคร
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.volunteerService.remove(+id);
  }
}
