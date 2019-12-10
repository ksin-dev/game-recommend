import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { Message, BatchPayload } from '../prisma/prisma.binding';

@Resolver()
export class UserResolver {
  constructor(private readonly prisma: PrismaService) { }

}