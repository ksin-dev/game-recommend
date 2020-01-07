import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GraphqlOptions } from './graphql.options';
import { GqlModuleAsyncOptions } from '@nestjs/graphql/dist/interfaces/gql-module-options.interface'
import { FileModule } from './file/file.module';
import { GenreModule } from './genre/genre.module';
import { NationModule } from './nation/nation.module';
import { GameContentModule } from './game-content/game-content.module';


@Module({
  imports: [GraphQLModule.forRootAsync({
    useClass: GraphqlOptions,
    uploads: {
      maxFileSize: 1000000000,
      maxfiles: 5
    },
  } as GqlModuleAsyncOptions),
    UserModule,
    AuthModule,
    FileModule,
    GenreModule,
    NationModule,
    GameContentModule
  ],
})
export class AppModule { }
