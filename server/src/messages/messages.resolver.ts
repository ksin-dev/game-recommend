import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { Message, BatchPayload } from '../prisma-client';

@Resolver()
export class MessagesResolver {
  constructor(private readonly prisma: PrismaService) { }
  @Query('messages')
  async getmessages(@Args() args, @Info() info): Promise<Message[]> {
    return await this.prisma.query.messages(args, info);
  }

  @Query('message')
  async getmessage(@Args() args, @Info() info): Promise<Message> {
    return await this.prisma.query.message(args, info);
  }

  @Mutation('createMessage')
  async createmessage(@Args() args, @Info() info): Promise<Message> {
    return await this.prisma.mutation.createMessage(args, info);
  }

  @Mutation('updateMessage')
  async updatemessage(@Args() args, @Info() info): Promise<Message> {
    return await this.prisma.mutation.updateMessage(args, info);
  }

  @Mutation('updateManyMessages')
  async updateManymessages(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateManyMessages(args, info);
  }

  @Mutation('deleteMessage')
  async deletemessage(@Args() args, @Info() info): Promise<Message> {
    return await this.prisma.mutation.deleteMessage(args, info);
  }

  @Mutation('deleteManyMessages')
  async deleteManymessages(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyMessages(args, info);
  }

  @Subscription('message')
  onmessageMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.message(args, info);
  }
}