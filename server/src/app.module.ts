import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    MessagesModule,

  ],
})
export class AppModule { }
