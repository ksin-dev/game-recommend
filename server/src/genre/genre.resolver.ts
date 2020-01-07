import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { BatchPayload, GenreCreateInput, GenreUpdateInput } from '../prisma/prisma-client';
import { GenreWhereUniqueInput } from 'src/prisma/prisma-client';


@Resolver()
export class GenreResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Mutation("createGenre")
  async createGenre(@Args("data") GenreInput: GenreCreateInput) {
    return this.prisma.client.createGenre(GenreInput);
  }

  @Mutation("updateGenre")
  async updateGenre(@Args("data") data: GenreUpdateInput, @Args("where") where: GenreWhereUniqueInput) {
    return this.prisma.client.updateGenre({ data, where });
  }

  @Mutation("deleteGenre")
  async deleteGenre(@Args("where") where: GenreWhereUniqueInput) {
    return this.prisma.client.deleteGenre(where);
  }
  @Query("genres")
  async genres(@Args("where") where) {
    return this.prisma.client.genres({ where: where });
  }
}