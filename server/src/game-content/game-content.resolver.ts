
import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { BatchPayload, GameContentWhereInput, GameContentWhereUniqueInput, User } from '../prisma/prisma-client';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GqlUser } from '../decorators/decorators'

const FRAGMENT = `
  fragment gameContents on GameContent{
    id
    title
    content
    mainImage
    subImage
    productionYear
		genres {
      id
      name
    }
    ProductionNation {
      id
      name
    }
  }
`

@Resolver()
export class GameContentResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Mutation("createGameContent")
  async createCameContent(@Args("data") data) {
    return this.prisma.client.createGameContent(data).$fragment(FRAGMENT);
  }

  @Mutation("updateGameContent")
  async updateGameContent(@Args("data") data, @Args("where") where) {
    return this.prisma.client.updateGameContent({ data, where });
  }

  @Query("gameContents")
  async gameContents(@Args("where") where?: GameContentWhereInput) {
    const gameContents = await this.prisma.client.gameContents({ where }).$fragment(FRAGMENT);
    return gameContents;
  }

  @UseGuards(GqlAuthGuard)
  @Query("gameContent")
  async gameContent(@GqlUser() user: User, @Args("where") where?: GameContentWhereUniqueInput) {
    console.log(user);
    return this.prisma.client.gameContent(where).$fragment(FRAGMENT);
  }

  // @Query("gameContentsByNotVote") 
  // async gameContentsByNotVote(@Args("userId") userId, ) {

}