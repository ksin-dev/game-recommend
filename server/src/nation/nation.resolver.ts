import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { BatchPayload, NationCreateInput, NationWhereInput } from '../prisma/prisma-client';


@Resolver()
export class NationResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Mutation("createNation")
  async CreateCameContent(@Args("data") nationInput: NationCreateInput) {
    return this.prisma.client.createNation(nationInput);
  }

  @Query("nations")
  async nations(@Args("where") where: NationWhereInput) {
    return this.prisma.client.nations({ where });
  }
}