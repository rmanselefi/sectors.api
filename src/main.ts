import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: function (origin, callback) {
      console.log('allowed cors for:', origin);
      callback(null, true);
    },
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe,Authorization',
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.enableVersioning();
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
