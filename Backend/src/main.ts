import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Creating application...');
  const app = await NestFactory.create(AppModule);
  console.log('Application created, starting server...');
  app.enableCors();

  await app.listen(5000);
}
bootstrap();
0