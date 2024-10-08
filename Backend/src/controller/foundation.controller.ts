import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FoundationService } from 'src/services/foundation.service';
import { CreateFoundationDto } from 'src/pet.dto';

@Controller('foundations')
export class FoundationController {
  constructor(private readonly foundationService: FoundationService) {}

  @Post()
  create(@Body() createFoundationDto: CreateFoundationDto) {
    return this.foundationService.create(createFoundationDto);
  }

  @Get()
  findAll() {
    return this.foundationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foundationService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foundationService.remove(+id);
  }
}
