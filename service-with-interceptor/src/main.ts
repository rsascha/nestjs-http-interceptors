import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger(`bootstrap`);
  const port = process.env['PORT'] || 3001;
  logger.log(`http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
