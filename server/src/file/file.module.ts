import { FileResolver } from './file.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { UploadScalar } from './upload.scalar';
@Module({
  imports: [PrismaModule],
  providers: [FileService, FileResolver, UploadScalar],
  exports: [FileResolver]
})
export class FileModule { };