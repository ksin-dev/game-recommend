import { GenreResolver } from './genre.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [GenreResolver],
  exports: [GenreResolver]
})
export class GenreModule { }
