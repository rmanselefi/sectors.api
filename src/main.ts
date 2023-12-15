import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,PUT,POST',
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.enableVersioning();
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
