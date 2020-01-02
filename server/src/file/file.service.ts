import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as _ from 'lodash';
import * as uuidv4 from 'uuid/v4';
import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { PUBLIC_PATH } from '../constants';
import * as path from 'path';
import { File, FileCreateInput } from '../prisma/prisma.binding';

@Injectable()
export class FileService {
  constructor(private readonly prisma: PrismaService) {

  }

  async createFile(file) {
    file.originalFilename = file.filename;
    file.filename = uuidv4();
    file.path = path.join("/public", file.filename);

    const w = createWriteStream(path.join(PUBLIC_PATH, file.filename));
    file.createReadStream().pipe(w);

    return this.prisma.mutation.createFile({
      data: _.omit(file, ["createReadStream"]) as FileCreateInput
    })
  }


}
