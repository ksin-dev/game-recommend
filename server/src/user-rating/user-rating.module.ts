import { UserRatingResolver } from './user-rating.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [UserRatingResolver],
  exports: [UserRatingResolver]
})
export class UserRatingModule { }