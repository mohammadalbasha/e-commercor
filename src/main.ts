import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestIdMiddleware } from './shared/middlewares/request-id/request-id.middleware';
import { VALIDATION_PIPE_OPTIONS } from './shared/constants';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CorsConfig,
  NestConfig,
  ValidationPipeOptionsConfig,
} from './shared/configs/config.interface';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const validationPipeOptions = configService.get<ValidationPipeOptionsConfig>(
    'validationPipeOptions',
  );

  if (corsConfig.enabled) app.enableCors({ origin: 'http://localhost:3000' });

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.use(RequestIdMiddleware);

  useContainer(app.select(AppModule), {
    fallbackOnErrors: true,
    fallback: true,
  }); // for custom validators like unique

  await app.listen(nestConfig.port);
}
bootstrap();
