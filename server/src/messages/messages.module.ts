import { MessagesResolver } from './messages.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [MessagesResolver],
  exports: [MessagesResolver]
})
export class MessagesModule { }