import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { News } from 'src/entitices/new.entities';
import { CreateNewsDto } from 'src/pet.dto';
import { NewsService } from 'src/services/new.service';
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<News> {
    return this.newsService.findOne(+id);
  }

  @Post()
  create(@Body() createNewsDto: CreateNewsDto): Promise<News> {
    return this.newsService.create(createNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.newsService.remove(+id);
  }
}
