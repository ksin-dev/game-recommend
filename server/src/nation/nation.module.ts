import { NationResolver } from './nation.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [NationResolver],
  exports: [NationResolver]
})
export class NationModule { }
