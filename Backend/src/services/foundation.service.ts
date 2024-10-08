import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Foundation } from 'src/entitices/foundation.entities';
import { CreateFoundationDto } from 'src/pet.dto';

@Injectable()
export class FoundationService {
  constructor(
    @InjectRepository(Foundation)
    private foundationRepository: Repository<Foundation>,
  ) {}

  create(createFoundationDto: CreateFoundationDto): Promise<Foundation> {
    const foundation = this.foundationRepository.create(createFoundationDto);
    return this.foundationRepository.save(foundation);
  }

  findAll(): Promise<Foundation[]> {
    return this.foundationRepository.find();
  }

  findOne(id: number): Promise<Foundation> {
    return this.foundationRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.foundationRepository.delete(id);
  }
}
