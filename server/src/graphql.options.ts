import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      typePaths: ['./**/*.gql', './**/*.graphql'],
      path: '/',
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      definitions: {
        path: join(process.cwd(), "src/graphql.schema.generated.ts"),
        outputAs: "class"
      },
      introspection: true,
      context: ({ req, res }) => ({ req, res }),
    };
  }
}
