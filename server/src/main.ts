import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import * as path from 'path';
import { PUBLIC_PATH } from './constants';
import { createWriteStream, mkdirSync, existsSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (!existsSync(PUBLIC_PATH)) {
    mkdirSync(PUBLIC_PATH);
  }

  app.use("/public", express.static(PUBLIC_PATH));
  await app.listen(3000);
}
bootstrap();
