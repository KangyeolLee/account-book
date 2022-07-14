import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { globalLogger } from './middlewares/Logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.use(globalLogger);
  await app.listen(4000);
}
bootstrap();
