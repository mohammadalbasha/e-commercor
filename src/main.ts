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

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const validationPipeOptions = configService.get<ValidationPipeOptionsConfig>(
    'validationPipeOptions',
  );

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.use(RequestIdMiddleware);

  if (corsConfig.enabled) app.enableCors();

  await app.listen(nestConfig.port);
}
bootstrap();
