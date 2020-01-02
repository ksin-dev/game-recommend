import { Scalar } from "@nestjs/graphql";

import { GraphQLUpload } from 'graphql-upload'
import { ValueNode } from "graphql";

@Scalar('Upload')
export class UploadScalar {
  description = "Upload custom scalar type";

  parseValue(value) {
    return GraphQLUpload.parseValue(value);
  }

  serialize(value: any) {
    return GraphQLUpload.serialize(value);
  }

  parseLiteral(ast: ValueNode) {
    const parseLiteral = GraphQLUpload.parseLiteral as (ast: ValueNode, variables?: any) => any;
    return parseLiteral(ast);
  }
}