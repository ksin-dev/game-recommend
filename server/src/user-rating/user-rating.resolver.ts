import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { UserRating, User } from '../prisma/prisma-client';
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GqlUser } from 'src/decorators/decorators';


const FRAGMENT = `
  fragment userRatings on UserRating{
    id
    rating
    user {
      id
    }
    gameContent {
      id
      title
      subImage
      mainImage
    }
  }
`
@Resolver()
export class UserRatingResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Mutation("createUserRating")
  async createUserRating(@Args("data") data): Promise<UserRating> {
    return this.prisma.client.createUserRating(data).$fragment(FRAGMENT);
  }

  @Mutation("updateUserRating")
  async updateUserRating(@Args("data") data, @Args("where") where): Promise<UserRating> {
    return this.prisma.client.updateUserRating({ data, where }).$fragment(FRAGMENT);
  }



  @Query("userRatingsByUser")
  async userRatingsByUser(@Args("userId") userId) {
    return this.prisma.client.userRatings({
      where: {
        user: {
          id: userId
        }
      }
    }).$fragment(FRAGMENT);
  }

  @UseGuards(GqlAuthGuard)
  @Query("userRatingByGameContent")
  async userRatingByGameContent(@GqlUser() user: User, @Args("gameContentId") gameContentId): Promise<UserRating | undefined> {
    const userId = user.id;

    const userRatings = await this.prisma.client.userRatings({
      where: {
        gameContent: {
          id: gameContentId
        },
        user: {
          id: userId
        }
      }
    }).$fragment(FRAGMENT) as [any];

    if (userRatings.length > 0) {
      return userRatings[0];
    } else {
      return undefined;
    }
  }



  @UseGuards(GqlAuthGuard)
  @Mutation("editUserRating")
  async editUserRatingByUser(@GqlUser() user: User, @Args("gameContentId") gameContentId, @Args("rating") rating): Promise<UserRating> {
    const userId = user.id;
    const userRatings = await this.prisma.client.userRatings({
      where: {
        user: {
          id: userId
        },
        gameContent: {
          id: gameContentId
        }
      }
    });
    if (userRatings.length) {
      return this.prisma.client.updateUserRating({
        data: {
          rating: rating
        },
        where: {
          id: userRatings[0].id
        }
      }).$fragment(FRAGMENT);
    } else {
      return this.prisma.client.createUserRating({
        user: {
          connect: {
            id: userId
          }
        },
        gameContent: {
          connect: {
            id: gameContentId
          }
        },
        rating: rating
      }).$fragment(FRAGMENT);
    }
  }

  // @Mutation("userRatings")
  // aysnc userRatings(@Args)
}

