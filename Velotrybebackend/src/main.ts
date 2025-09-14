import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors();
  
  // Set global API prefix
  app.setGlobalPrefix('api/v1');
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;
  await app.listen(port, () => {
    console.info(`Server running successfully on Port ${port}`);
  });
}
bootstrap();
