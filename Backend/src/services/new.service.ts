import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from 'src/entitices/new.entities';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  findAll(): Promise<News[]> {
    return this.newsRepository.find();
  }

  findOne(id: number): Promise<News> {
    return this.newsRepository.findOne({ where: { id } });
  }

  create(news: Partial<News>): Promise<News> {
    return this.newsRepository.save(news);
  }

  async remove(id: number): Promise<void> {
    await this.newsRepository.delete(id);
  }
}
