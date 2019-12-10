import { UserResolver } from './user.resover';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver],
  exports: [UserResolver]
})
export class UserModule { }