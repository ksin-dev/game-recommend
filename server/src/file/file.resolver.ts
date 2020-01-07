import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { BatchPayload, File } from '../prisma/prisma-client';
import { FileService } from './file.service'
import { Writable } from 'stream';



@Resolver()
export class FileResolver {
  constructor(private readonly fileService: FileService) {

  }

  @Mutation("uploadFile")
  async uploadfile(@Args("file") file): Promise<File> {
    return this.fileService.createFile(file);
  }



}
