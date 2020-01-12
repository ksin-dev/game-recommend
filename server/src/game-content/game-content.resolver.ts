
import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { BatchPayload, GameContentWhereInput, GameContentWhereUniqueInput, GameContentUpdateInput, User, AtLeastOne } from '../prisma/prisma-client';
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
    youtubeId
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
  async updateGameContent(@Args("data") data: GameContentUpdateInput, @Args("where") where: AtLeastOne<{ id: string }>) {
    const genres = await this.prisma.client.gameContent({ id: where.id }).genres();

    if (data.genres?.connect) {
      const connect = data.genres.connect as [{ id: string }];
      const disConnect = genres.filter((genre) => !connect.find((o) => o.id === genre.id)).map(o => ({ id: o.id }));
      data.genres.disconnect = disConnect;
    }

    return this.prisma.client.updateGameContent({ data, where });
  }

  @Query("gameContents")
  async gameContents(@Args("where") where?: GameContentWhereInput) {
    const gameContents = await this.prisma.client.gameContents({ where }).$fragment(FRAGMENT);
    return gameContents;
  }

  @Query("gameContent")
  async gameContent(@Args("where") where?: GameContentWhereUniqueInput) {
    return this.prisma.client.gameContent(where).$fragment(FRAGMENT);
  }

  // @Query("gameContentsByNotVote") 
  // async gameContentsByNotVote(@Args("userId") userId, ) {

}