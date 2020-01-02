import { GameContentResolver } from './game-content.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [GameContentResolver],
  exports: [GameContentResolver]
})
export class GameContentModule { }
