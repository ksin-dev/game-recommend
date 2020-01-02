
import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { BatchPayload, GameContentWhereInput } from '../prisma/prisma.binding';


@Resolver()
export class GameContentResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Mutation("createGameContent")
  async createCameContent(@Args("data") data) {
    return this.prisma.mutation.createGameContent({ data: data });
  }

  @Query("gameContents")
  async gameContents(@Args("where") where?: GameContentWhereInput) {
    return this.prisma.query.gameContents({ where });
  }
}