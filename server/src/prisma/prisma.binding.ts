import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    files: <T = Array<File | null>>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    genres: <T = Array<Genre | null>>(args: { where?: GenreWhereInput | null, orderBy?: GenreOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    nations: <T = Array<Nation | null>>(args: { where?: NationWhereInput | null, orderBy?: NationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRatings: <T = Array<UserRating | null>>(args: { where?: UserRatingWhereInput | null, orderBy?: UserRatingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    gameContents: <T = Array<GameContent | null>>(args: { where?: GameContentWhereInput | null, orderBy?: GameContentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    genre: <T = Genre | null>(args: { where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    nation: <T = Nation | null>(args: { where: NationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    userRating: <T = UserRating | null>(args: { where: UserRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    gameContent: <T = GameContent | null>(args: { where: GameContentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    genresConnection: <T = GenreConnection>(args: { where?: GenreWhereInput | null, orderBy?: GenreOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    nationsConnection: <T = NationConnection>(args: { where?: NationWhereInput | null, orderBy?: NationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRatingsConnection: <T = UserRatingConnection>(args: { where?: UserRatingWhereInput | null, orderBy?: UserRatingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    gameContentsConnection: <T = GameContentConnection>(args: { where?: GameContentWhereInput | null, orderBy?: GameContentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGenre: <T = Genre>(args: { data: GenreCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNation: <T = Nation>(args: { data: NationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserRating: <T = UserRating>(args: { data: UserRatingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGameContent: <T = GameContent>(args: { data: GameContentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateGenre: <T = Genre | null>(args: { data: GenreUpdateInput, where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNation: <T = Nation | null>(args: { data: NationUpdateInput, where: NationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUserRating: <T = UserRating | null>(args: { data: UserRatingUpdateInput, where: UserRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateGameContent: <T = GameContent | null>(args: { data: GameContentUpdateInput, where: GameContentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteGenre: <T = Genre | null>(args: { where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNation: <T = Nation | null>(args: { where: NationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUserRating: <T = UserRating | null>(args: { where: UserRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteGameContent: <T = GameContent | null>(args: { where: GameContentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGenre: <T = Genre>(args: { where: GenreWhereUniqueInput, create: GenreCreateInput, update: GenreUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNation: <T = Nation>(args: { where: NationWhereUniqueInput, create: NationCreateInput, update: NationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUserRating: <T = UserRating>(args: { where: UserRatingWhereUniqueInput, create: UserRatingCreateInput, update: UserRatingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGameContent: <T = GameContent>(args: { where: GameContentWhereUniqueInput, create: GameContentCreateInput, update: GameContentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGenres: <T = BatchPayload>(args: { data: GenreUpdateManyMutationInput, where?: GenreWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNations: <T = BatchPayload>(args: { data: NationUpdateManyMutationInput, where?: NationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserRatings: <T = BatchPayload>(args: { data: UserRatingUpdateManyMutationInput, where?: UserRatingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGameContents: <T = BatchPayload>(args: { data: GameContentUpdateManyMutationInput, where?: GameContentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGenres: <T = BatchPayload>(args: { where?: GenreWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNations: <T = BatchPayload>(args: { where?: NationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserRatings: <T = BatchPayload>(args: { where?: UserRatingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGameContents: <T = BatchPayload>(args: { where?: GameContentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    genre: <T = GenreSubscriptionPayload | null>(args: { where?: GenreSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    nation: <T = NationSubscriptionPayload | null>(args: { where?: NationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    userRating: <T = UserRatingSubscriptionPayload | null>(args: { where?: UserRatingSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    gameContent: <T = GameContentSubscriptionPayload | null>(args: { where?: GameContentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  File: (where?: FileWhereInput) => Promise<boolean>
  Genre: (where?: GenreWhereInput) => Promise<boolean>
  Nation: (where?: NationWhereInput) => Promise<boolean>
  UserRating: (where?: UserRatingWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  GameContent: (where?: GameContentWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateFile {
  count: Int!
}

type AggregateGameContent {
  count: Int!
}

type AggregateGenre {
  count: Int!
}

type AggregateNation {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserRating {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type File implements Node {
  id: ID!
  filename: String!
  mimetype: String!
  encoding: String!
  originalFilename: String!
  path: String!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  id: ID
  filename: String!
  mimetype: String!
  encoding: String!
  originalFilename: String!
  path: String!
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  originalFilename_ASC
  originalFilename_DESC
  path_ASC
  path_DESC
}

type FilePreviousValues {
  id: ID!
  filename: String!
  mimetype: String!
  encoding: String!
  originalFilename: String!
  path: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  originalFilename: String
  path: String
}

input FileUpdateManyMutationInput {
  filename: String
  mimetype: String
  encoding: String
  originalFilename: String
  path: String
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  originalFilename: String

  """All values that are not equal to given value."""
  originalFilename_not: String

  """All values that are contained in given list."""
  originalFilename_in: [String!]

  """All values that are not contained in given list."""
  originalFilename_not_in: [String!]

  """All values less than the given value."""
  originalFilename_lt: String

  """All values less than or equal the given value."""
  originalFilename_lte: String

  """All values greater than the given value."""
  originalFilename_gt: String

  """All values greater than or equal the given value."""
  originalFilename_gte: String

  """All values containing the given string."""
  originalFilename_contains: String

  """All values not containing the given string."""
  originalFilename_not_contains: String

  """All values starting with the given string."""
  originalFilename_starts_with: String

  """All values not starting with the given string."""
  originalFilename_not_starts_with: String

  """All values ending with the given string."""
  originalFilename_ends_with: String

  """All values not ending with the given string."""
  originalFilename_not_ends_with: String
  path: String

  """All values that are not equal to given value."""
  path_not: String

  """All values that are contained in given list."""
  path_in: [String!]

  """All values that are not contained in given list."""
  path_not_in: [String!]

  """All values less than the given value."""
  path_lt: String

  """All values less than or equal the given value."""
  path_lte: String

  """All values greater than the given value."""
  path_gt: String

  """All values greater than or equal the given value."""
  path_gte: String

  """All values containing the given string."""
  path_contains: String

  """All values not containing the given string."""
  path_not_contains: String

  """All values starting with the given string."""
  path_starts_with: String

  """All values not starting with the given string."""
  path_not_starts_with: String

  """All values ending with the given string."""
  path_ends_with: String

  """All values not ending with the given string."""
  path_not_ends_with: String
}

input FileWhereUniqueInput {
  id: ID
}

type GameContent implements Node {
  id: ID!
  genres(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Genre!]
  title: String!
  content: String!
  productionYear: Int!
  ProductionNation: Nation
  mainImage: String
  subImage: String
}

"""A connection to a list of items."""
type GameContentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GameContentEdge]!
  aggregate: AggregateGameContent!
}

input GameContentCreateInput {
  id: ID
  title: String!
  content: String!
  productionYear: Int!
  mainImage: String
  subImage: String
  genres: GenreCreateManyWithoutGameContentsInput
  ProductionNation: NationCreateOneWithoutGameContentInput
}

input GameContentCreateManyWithoutGenresInput {
  create: [GameContentCreateWithoutGenresInput!]
  connect: [GameContentWhereUniqueInput!]
}

input GameContentCreateManyWithoutProductionNationInput {
  create: [GameContentCreateWithoutProductionNationInput!]
  connect: [GameContentWhereUniqueInput!]
}

input GameContentCreateOneInput {
  create: GameContentCreateInput
  connect: GameContentWhereUniqueInput
}

input GameContentCreateWithoutGenresInput {
  id: ID
  title: String!
  content: String!
  productionYear: Int!
  mainImage: String
  subImage: String
  ProductionNation: NationCreateOneWithoutGameContentInput
}

input GameContentCreateWithoutProductionNationInput {
  id: ID
  title: String!
  content: String!
  productionYear: Int!
  mainImage: String
  subImage: String
  genres: GenreCreateManyWithoutGameContentsInput
}

"""An edge in a connection."""
type GameContentEdge {
  """The item at the end of the edge."""
  node: GameContent!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GameContentOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  productionYear_ASC
  productionYear_DESC
  mainImage_ASC
  mainImage_DESC
  subImage_ASC
  subImage_DESC
}

type GameContentPreviousValues {
  id: ID!
  title: String!
  content: String!
  productionYear: Int!
  mainImage: String
  subImage: String
}

input GameContentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GameContentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameContentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameContentScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  productionYear: Int

  """All values that are not equal to given value."""
  productionYear_not: Int

  """All values that are contained in given list."""
  productionYear_in: [Int!]

  """All values that are not contained in given list."""
  productionYear_not_in: [Int!]

  """All values less than the given value."""
  productionYear_lt: Int

  """All values less than or equal the given value."""
  productionYear_lte: Int

  """All values greater than the given value."""
  productionYear_gt: Int

  """All values greater than or equal the given value."""
  productionYear_gte: Int
  mainImage: String

  """All values that are not equal to given value."""
  mainImage_not: String

  """All values that are contained in given list."""
  mainImage_in: [String!]

  """All values that are not contained in given list."""
  mainImage_not_in: [String!]

  """All values less than the given value."""
  mainImage_lt: String

  """All values less than or equal the given value."""
  mainImage_lte: String

  """All values greater than the given value."""
  mainImage_gt: String

  """All values greater than or equal the given value."""
  mainImage_gte: String

  """All values containing the given string."""
  mainImage_contains: String

  """All values not containing the given string."""
  mainImage_not_contains: String

  """All values starting with the given string."""
  mainImage_starts_with: String

  """All values not starting with the given string."""
  mainImage_not_starts_with: String

  """All values ending with the given string."""
  mainImage_ends_with: String

  """All values not ending with the given string."""
  mainImage_not_ends_with: String
  subImage: String

  """All values that are not equal to given value."""
  subImage_not: String

  """All values that are contained in given list."""
  subImage_in: [String!]

  """All values that are not contained in given list."""
  subImage_not_in: [String!]

  """All values less than the given value."""
  subImage_lt: String

  """All values less than or equal the given value."""
  subImage_lte: String

  """All values greater than the given value."""
  subImage_gt: String

  """All values greater than or equal the given value."""
  subImage_gte: String

  """All values containing the given string."""
  subImage_contains: String

  """All values not containing the given string."""
  subImage_not_contains: String

  """All values starting with the given string."""
  subImage_starts_with: String

  """All values not starting with the given string."""
  subImage_not_starts_with: String

  """All values ending with the given string."""
  subImage_ends_with: String

  """All values not ending with the given string."""
  subImage_not_ends_with: String
}

type GameContentSubscriptionPayload {
  mutation: MutationType!
  node: GameContent
  updatedFields: [String!]
  previousValues: GameContentPreviousValues
}

input GameContentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GameContentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameContentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameContentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GameContentWhereInput
}

input GameContentUpdateDataInput {
  title: String
  content: String
  productionYear: Int
  mainImage: String
  subImage: String
  genres: GenreUpdateManyWithoutGameContentsInput
  ProductionNation: NationUpdateOneWithoutGameContentInput
}

input GameContentUpdateInput {
  title: String
  content: String
  productionYear: Int
  mainImage: String
  subImage: String
  genres: GenreUpdateManyWithoutGameContentsInput
  ProductionNation: NationUpdateOneWithoutGameContentInput
}

input GameContentUpdateManyDataInput {
  title: String
  content: String
  productionYear: Int
  mainImage: String
  subImage: String
}

input GameContentUpdateManyMutationInput {
  title: String
  content: String
  productionYear: Int
  mainImage: String
  subImage: String
}

input GameContentUpdateManyWithoutGenresInput {
  create: [GameContentCreateWithoutGenresInput!]
  connect: [GameContentWhereUniqueInput!]
  set: [GameContentWhereUniqueInput!]
  disconnect: [GameContentWhereUniqueInput!]
  delete: [GameContentWhereUniqueInput!]
  update: [GameContentUpdateWithWhereUniqueWithoutGenresInput!]
  updateMany: [GameContentUpdateManyWithWhereNestedInput!]
  deleteMany: [GameContentScalarWhereInput!]
  upsert: [GameContentUpsertWithWhereUniqueWithoutGenresInput!]
}

input GameContentUpdateManyWithoutProductionNationInput {
  create: [GameContentCreateWithoutProductionNationInput!]
  connect: [GameContentWhereUniqueInput!]
  set: [GameContentWhereUniqueInput!]
  disconnect: [GameContentWhereUniqueInput!]
  delete: [GameContentWhereUniqueInput!]
  update: [GameContentUpdateWithWhereUniqueWithoutProductionNationInput!]
  updateMany: [GameContentUpdateManyWithWhereNestedInput!]
  deleteMany: [GameContentScalarWhereInput!]
  upsert: [GameContentUpsertWithWhereUniqueWithoutProductionNationInput!]
}

input GameContentUpdateManyWithWhereNestedInput {
  where: GameContentScalarWhereInput!
  data: GameContentUpdateManyDataInput!
}

input GameContentUpdateOneRequiredInput {
  create: GameContentCreateInput
  connect: GameContentWhereUniqueInput
  update: GameContentUpdateDataInput
  upsert: GameContentUpsertNestedInput
}

input GameContentUpdateWithoutGenresDataInput {
  title: String
  content: String
  productionYear: Int
  mainImage: String
  subImage: String
  ProductionNation: NationUpdateOneWithoutGameContentInput
}

input GameContentUpdateWithoutProductionNationDataInput {
  title: String
  content: String
  productionYear: Int
  mainImage: String
  subImage: String
  genres: GenreUpdateManyWithoutGameContentsInput
}

input GameContentUpdateWithWhereUniqueWithoutGenresInput {
  where: GameContentWhereUniqueInput!
  data: GameContentUpdateWithoutGenresDataInput!
}

input GameContentUpdateWithWhereUniqueWithoutProductionNationInput {
  where: GameContentWhereUniqueInput!
  data: GameContentUpdateWithoutProductionNationDataInput!
}

input GameContentUpsertNestedInput {
  update: GameContentUpdateDataInput!
  create: GameContentCreateInput!
}

input GameContentUpsertWithWhereUniqueWithoutGenresInput {
  where: GameContentWhereUniqueInput!
  update: GameContentUpdateWithoutGenresDataInput!
  create: GameContentCreateWithoutGenresInput!
}

input GameContentUpsertWithWhereUniqueWithoutProductionNationInput {
  where: GameContentWhereUniqueInput!
  update: GameContentUpdateWithoutProductionNationDataInput!
  create: GameContentCreateWithoutProductionNationInput!
}

input GameContentWhereInput {
  """Logical AND on all given filters."""
  AND: [GameContentWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameContentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameContentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  productionYear: Int

  """All values that are not equal to given value."""
  productionYear_not: Int

  """All values that are contained in given list."""
  productionYear_in: [Int!]

  """All values that are not contained in given list."""
  productionYear_not_in: [Int!]

  """All values less than the given value."""
  productionYear_lt: Int

  """All values less than or equal the given value."""
  productionYear_lte: Int

  """All values greater than the given value."""
  productionYear_gt: Int

  """All values greater than or equal the given value."""
  productionYear_gte: Int
  mainImage: String

  """All values that are not equal to given value."""
  mainImage_not: String

  """All values that are contained in given list."""
  mainImage_in: [String!]

  """All values that are not contained in given list."""
  mainImage_not_in: [String!]

  """All values less than the given value."""
  mainImage_lt: String

  """All values less than or equal the given value."""
  mainImage_lte: String

  """All values greater than the given value."""
  mainImage_gt: String

  """All values greater than or equal the given value."""
  mainImage_gte: String

  """All values containing the given string."""
  mainImage_contains: String

  """All values not containing the given string."""
  mainImage_not_contains: String

  """All values starting with the given string."""
  mainImage_starts_with: String

  """All values not starting with the given string."""
  mainImage_not_starts_with: String

  """All values ending with the given string."""
  mainImage_ends_with: String

  """All values not ending with the given string."""
  mainImage_not_ends_with: String
  subImage: String

  """All values that are not equal to given value."""
  subImage_not: String

  """All values that are contained in given list."""
  subImage_in: [String!]

  """All values that are not contained in given list."""
  subImage_not_in: [String!]

  """All values less than the given value."""
  subImage_lt: String

  """All values less than or equal the given value."""
  subImage_lte: String

  """All values greater than the given value."""
  subImage_gt: String

  """All values greater than or equal the given value."""
  subImage_gte: String

  """All values containing the given string."""
  subImage_contains: String

  """All values not containing the given string."""
  subImage_not_contains: String

  """All values starting with the given string."""
  subImage_starts_with: String

  """All values not starting with the given string."""
  subImage_not_starts_with: String

  """All values ending with the given string."""
  subImage_ends_with: String

  """All values not ending with the given string."""
  subImage_not_ends_with: String
  genres_every: GenreWhereInput
  genres_some: GenreWhereInput
  genres_none: GenreWhereInput
  ProductionNation: NationWhereInput
}

input GameContentWhereUniqueInput {
  id: ID
}

type Genre implements Node {
  id: ID!
  name: String!
  gameContents(where: GameContentWhereInput, orderBy: GameContentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameContent!]
}

"""A connection to a list of items."""
type GenreConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GenreEdge]!
  aggregate: AggregateGenre!
}

input GenreCreateInput {
  id: ID
  name: String!
  gameContents: GameContentCreateManyWithoutGenresInput
}

input GenreCreateManyWithoutGameContentsInput {
  create: [GenreCreateWithoutGameContentsInput!]
  connect: [GenreWhereUniqueInput!]
}

input GenreCreateWithoutGameContentsInput {
  id: ID
  name: String!
}

"""An edge in a connection."""
type GenreEdge {
  """The item at the end of the edge."""
  node: Genre!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GenreOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type GenrePreviousValues {
  id: ID!
  name: String!
}

input GenreScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GenreScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GenreScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GenreScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type GenreSubscriptionPayload {
  mutation: MutationType!
  node: Genre
  updatedFields: [String!]
  previousValues: GenrePreviousValues
}

input GenreSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GenreSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GenreSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GenreSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GenreWhereInput
}

input GenreUpdateInput {
  name: String
  gameContents: GameContentUpdateManyWithoutGenresInput
}

input GenreUpdateManyDataInput {
  name: String
}

input GenreUpdateManyMutationInput {
  name: String
}

input GenreUpdateManyWithoutGameContentsInput {
  create: [GenreCreateWithoutGameContentsInput!]
  connect: [GenreWhereUniqueInput!]
  set: [GenreWhereUniqueInput!]
  disconnect: [GenreWhereUniqueInput!]
  delete: [GenreWhereUniqueInput!]
  update: [GenreUpdateWithWhereUniqueWithoutGameContentsInput!]
  updateMany: [GenreUpdateManyWithWhereNestedInput!]
  deleteMany: [GenreScalarWhereInput!]
  upsert: [GenreUpsertWithWhereUniqueWithoutGameContentsInput!]
}

input GenreUpdateManyWithWhereNestedInput {
  where: GenreScalarWhereInput!
  data: GenreUpdateManyDataInput!
}

input GenreUpdateWithoutGameContentsDataInput {
  name: String
}

input GenreUpdateWithWhereUniqueWithoutGameContentsInput {
  where: GenreWhereUniqueInput!
  data: GenreUpdateWithoutGameContentsDataInput!
}

input GenreUpsertWithWhereUniqueWithoutGameContentsInput {
  where: GenreWhereUniqueInput!
  update: GenreUpdateWithoutGameContentsDataInput!
  create: GenreCreateWithoutGameContentsInput!
}

input GenreWhereInput {
  """Logical AND on all given filters."""
  AND: [GenreWhereInput!]

  """Logical OR on all given filters."""
  OR: [GenreWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GenreWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  gameContents_every: GameContentWhereInput
  gameContents_some: GameContentWhereInput
  gameContents_none: GameContentWhereInput
}

input GenreWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createFile(data: FileCreateInput!): File!
  createGenre(data: GenreCreateInput!): Genre!
  createNation(data: NationCreateInput!): Nation!
  createUserRating(data: UserRatingCreateInput!): UserRating!
  createUser(data: UserCreateInput!): User!
  createGameContent(data: GameContentCreateInput!): GameContent!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateGenre(data: GenreUpdateInput!, where: GenreWhereUniqueInput!): Genre
  updateNation(data: NationUpdateInput!, where: NationWhereUniqueInput!): Nation
  updateUserRating(data: UserRatingUpdateInput!, where: UserRatingWhereUniqueInput!): UserRating
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateGameContent(data: GameContentUpdateInput!, where: GameContentWhereUniqueInput!): GameContent
  deleteFile(where: FileWhereUniqueInput!): File
  deleteGenre(where: GenreWhereUniqueInput!): Genre
  deleteNation(where: NationWhereUniqueInput!): Nation
  deleteUserRating(where: UserRatingWhereUniqueInput!): UserRating
  deleteUser(where: UserWhereUniqueInput!): User
  deleteGameContent(where: GameContentWhereUniqueInput!): GameContent
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertGenre(where: GenreWhereUniqueInput!, create: GenreCreateInput!, update: GenreUpdateInput!): Genre!
  upsertNation(where: NationWhereUniqueInput!, create: NationCreateInput!, update: NationUpdateInput!): Nation!
  upsertUserRating(where: UserRatingWhereUniqueInput!, create: UserRatingCreateInput!, update: UserRatingUpdateInput!): UserRating!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertGameContent(where: GameContentWhereUniqueInput!, create: GameContentCreateInput!, update: GameContentUpdateInput!): GameContent!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManyGenres(data: GenreUpdateManyMutationInput!, where: GenreWhereInput): BatchPayload!
  updateManyNations(data: NationUpdateManyMutationInput!, where: NationWhereInput): BatchPayload!
  updateManyUserRatings(data: UserRatingUpdateManyMutationInput!, where: UserRatingWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyGameContents(data: GameContentUpdateManyMutationInput!, where: GameContentWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyGenres(where: GenreWhereInput): BatchPayload!
  deleteManyNations(where: NationWhereInput): BatchPayload!
  deleteManyUserRatings(where: UserRatingWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyGameContents(where: GameContentWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Nation implements Node {
  id: ID!
  name: String!
  gameContent(where: GameContentWhereInput, orderBy: GameContentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameContent!]
}

"""A connection to a list of items."""
type NationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NationEdge]!
  aggregate: AggregateNation!
}

input NationCreateInput {
  id: ID
  name: String!
  gameContent: GameContentCreateManyWithoutProductionNationInput
}

input NationCreateOneWithoutGameContentInput {
  create: NationCreateWithoutGameContentInput
  connect: NationWhereUniqueInput
}

input NationCreateWithoutGameContentInput {
  id: ID
  name: String!
}

"""An edge in a connection."""
type NationEdge {
  """The item at the end of the edge."""
  node: Nation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type NationPreviousValues {
  id: ID!
  name: String!
}

type NationSubscriptionPayload {
  mutation: MutationType!
  node: Nation
  updatedFields: [String!]
  previousValues: NationPreviousValues
}

input NationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NationSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NationWhereInput
}

input NationUpdateInput {
  name: String
  gameContent: GameContentUpdateManyWithoutProductionNationInput
}

input NationUpdateManyMutationInput {
  name: String
}

input NationUpdateOneWithoutGameContentInput {
  create: NationCreateWithoutGameContentInput
  connect: NationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: NationUpdateWithoutGameContentDataInput
  upsert: NationUpsertWithoutGameContentInput
}

input NationUpdateWithoutGameContentDataInput {
  name: String
}

input NationUpsertWithoutGameContentInput {
  update: NationUpdateWithoutGameContentDataInput!
  create: NationCreateWithoutGameContentInput!
}

input NationWhereInput {
  """Logical AND on all given filters."""
  AND: [NationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  gameContent_every: GameContentWhereInput
  gameContent_some: GameContentWhereInput
  gameContent_none: GameContentWhereInput
}

input NationWhereUniqueInput {
  id: ID
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  genres(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Genre]!
  nations(where: NationWhereInput, orderBy: NationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Nation]!
  userRatings(where: UserRatingWhereInput, orderBy: UserRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRating]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  gameContents(where: GameContentWhereInput, orderBy: GameContentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameContent]!
  file(where: FileWhereUniqueInput!): File
  genre(where: GenreWhereUniqueInput!): Genre
  nation(where: NationWhereUniqueInput!): Nation
  userRating(where: UserRatingWhereUniqueInput!): UserRating
  user(where: UserWhereUniqueInput!): User
  gameContent(where: GameContentWhereUniqueInput!): GameContent
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  genresConnection(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GenreConnection!
  nationsConnection(where: NationWhereInput, orderBy: NationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NationConnection!
  userRatingsConnection(where: UserRatingWhereInput, orderBy: UserRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRatingConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  gameContentsConnection(where: GameContentWhereInput, orderBy: GameContentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameContentConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  genre(where: GenreSubscriptionWhereInput): GenreSubscriptionPayload
  nation(where: NationSubscriptionWhereInput): NationSubscriptionPayload
  userRating(where: UserRatingSubscriptionWhereInput): UserRatingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  gameContent(where: GameContentSubscriptionWhereInput): GameContentSubscriptionPayload
}

type User implements Node {
  id: ID!
  username: String!
  email: String!
  hash: String!
  salt: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  hash: String!
  salt: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  hash_ASC
  hash_DESC
  salt_ASC
  salt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  hash: String!
  salt: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserRating implements Node {
  id: ID!
  user: User!
  gameContent: GameContent!
  rating: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserRatingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserRatingEdge]!
  aggregate: AggregateUserRating!
}

input UserRatingCreateInput {
  id: ID
  rating: Int!
  user: UserCreateOneInput!
  gameContent: GameContentCreateOneInput!
}

"""An edge in a connection."""
type UserRatingEdge {
  """The item at the end of the edge."""
  node: UserRating!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserRatingOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserRatingPreviousValues {
  id: ID!
  rating: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserRatingSubscriptionPayload {
  mutation: MutationType!
  node: UserRating
  updatedFields: [String!]
  previousValues: UserRatingPreviousValues
}

input UserRatingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRatingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserRatingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRatingSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserRatingWhereInput
}

input UserRatingUpdateInput {
  rating: Int
  user: UserUpdateOneRequiredInput
  gameContent: GameContentUpdateOneRequiredInput
}

input UserRatingUpdateManyMutationInput {
  rating: Int
}

input UserRatingWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRatingWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserRatingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRatingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  rating: Int

  """All values that are not equal to given value."""
  rating_not: Int

  """All values that are contained in given list."""
  rating_in: [Int!]

  """All values that are not contained in given list."""
  rating_not_in: [Int!]

  """All values less than the given value."""
  rating_lt: Int

  """All values less than or equal the given value."""
  rating_lte: Int

  """All values greater than the given value."""
  rating_gt: Int

  """All values greater than or equal the given value."""
  rating_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  gameContent: GameContentWhereInput
}

input UserRatingWhereUniqueInput {
  id: ID
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  username: String
  email: String
  hash: String
  salt: String
}

input UserUpdateInput {
  username: String
  email: String
  hash: String
  salt: String
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  hash: String
  salt: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  hash: String

  """All values that are not equal to given value."""
  hash_not: String

  """All values that are contained in given list."""
  hash_in: [String!]

  """All values that are not contained in given list."""
  hash_not_in: [String!]

  """All values less than the given value."""
  hash_lt: String

  """All values less than or equal the given value."""
  hash_lte: String

  """All values greater than the given value."""
  hash_gt: String

  """All values greater than or equal the given value."""
  hash_gte: String

  """All values containing the given string."""
  hash_contains: String

  """All values not containing the given string."""
  hash_not_contains: String

  """All values starting with the given string."""
  hash_starts_with: String

  """All values not starting with the given string."""
  hash_not_starts_with: String

  """All values ending with the given string."""
  hash_ends_with: String

  """All values not ending with the given string."""
  hash_not_ends_with: String
  salt: String

  """All values that are not equal to given value."""
  salt_not: String

  """All values that are contained in given list."""
  salt_in: [String!]

  """All values that are not contained in given list."""
  salt_not_in: [String!]

  """All values less than the given value."""
  salt_lt: String

  """All values less than or equal the given value."""
  salt_lte: String

  """All values greater than the given value."""
  salt_gt: String

  """All values greater than or equal the given value."""
  salt_gte: String

  """All values containing the given string."""
  salt_contains: String

  """All values not containing the given string."""
  salt_not_contains: String

  """All values starting with the given string."""
  salt_starts_with: String

  """All values not starting with the given string."""
  salt_not_starts_with: String

  """All values ending with the given string."""
  salt_ends_with: String

  """All values not ending with the given string."""
  salt_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'originalFilename_ASC' |
  'originalFilename_DESC' |
  'path_ASC' |
  'path_DESC'

export type GameContentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'productionYear_ASC' |
  'productionYear_DESC' |
  'mainImage_ASC' |
  'mainImage_DESC' |
  'subImage_ASC' |
  'subImage_DESC'

export type GenreOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'email_ASC' |
  'email_DESC' |
  'hash_ASC' |
  'hash_DESC' |
  'salt_ASC' |
  'salt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserRatingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface FileCreateInput {
  id?: ID_Input | null
  filename: String
  mimetype: String
  encoding: String
  originalFilename: String
  path: String
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FileWhereInput | null
}

export interface FileUpdateInput {
  filename?: String | null
  mimetype?: String | null
  encoding?: String | null
  originalFilename?: String | null
  path?: String | null
}

export interface FileUpdateManyMutationInput {
  filename?: String | null
  mimetype?: String | null
  encoding?: String | null
  originalFilename?: String | null
  path?: String | null
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput | null
  OR?: FileWhereInput[] | FileWhereInput | null
  NOT?: FileWhereInput[] | FileWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  filename?: String | null
  filename_not?: String | null
  filename_in?: String[] | String | null
  filename_not_in?: String[] | String | null
  filename_lt?: String | null
  filename_lte?: String | null
  filename_gt?: String | null
  filename_gte?: String | null
  filename_contains?: String | null
  filename_not_contains?: String | null
  filename_starts_with?: String | null
  filename_not_starts_with?: String | null
  filename_ends_with?: String | null
  filename_not_ends_with?: String | null
  mimetype?: String | null
  mimetype_not?: String | null
  mimetype_in?: String[] | String | null
  mimetype_not_in?: String[] | String | null
  mimetype_lt?: String | null
  mimetype_lte?: String | null
  mimetype_gt?: String | null
  mimetype_gte?: String | null
  mimetype_contains?: String | null
  mimetype_not_contains?: String | null
  mimetype_starts_with?: String | null
  mimetype_not_starts_with?: String | null
  mimetype_ends_with?: String | null
  mimetype_not_ends_with?: String | null
  encoding?: String | null
  encoding_not?: String | null
  encoding_in?: String[] | String | null
  encoding_not_in?: String[] | String | null
  encoding_lt?: String | null
  encoding_lte?: String | null
  encoding_gt?: String | null
  encoding_gte?: String | null
  encoding_contains?: String | null
  encoding_not_contains?: String | null
  encoding_starts_with?: String | null
  encoding_not_starts_with?: String | null
  encoding_ends_with?: String | null
  encoding_not_ends_with?: String | null
  originalFilename?: String | null
  originalFilename_not?: String | null
  originalFilename_in?: String[] | String | null
  originalFilename_not_in?: String[] | String | null
  originalFilename_lt?: String | null
  originalFilename_lte?: String | null
  originalFilename_gt?: String | null
  originalFilename_gte?: String | null
  originalFilename_contains?: String | null
  originalFilename_not_contains?: String | null
  originalFilename_starts_with?: String | null
  originalFilename_not_starts_with?: String | null
  originalFilename_ends_with?: String | null
  originalFilename_not_ends_with?: String | null
  path?: String | null
  path_not?: String | null
  path_in?: String[] | String | null
  path_not_in?: String[] | String | null
  path_lt?: String | null
  path_lte?: String | null
  path_gt?: String | null
  path_gte?: String | null
  path_contains?: String | null
  path_not_contains?: String | null
  path_starts_with?: String | null
  path_not_starts_with?: String | null
  path_ends_with?: String | null
  path_not_ends_with?: String | null
}

export interface FileWhereUniqueInput {
  id?: ID_Input | null
}

export interface GameContentCreateInput {
  id?: ID_Input | null
  title: String
  content: String
  productionYear: Int
  mainImage?: String | null
  subImage?: String | null
  genres?: GenreCreateManyWithoutGameContentsInput | null
  ProductionNation?: NationCreateOneWithoutGameContentInput | null
}

export interface GameContentCreateManyWithoutGenresInput {
  create?: GameContentCreateWithoutGenresInput[] | GameContentCreateWithoutGenresInput | null
  connect?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
}

export interface GameContentCreateManyWithoutProductionNationInput {
  create?: GameContentCreateWithoutProductionNationInput[] | GameContentCreateWithoutProductionNationInput | null
  connect?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
}

export interface GameContentCreateOneInput {
  create?: GameContentCreateInput | null
  connect?: GameContentWhereUniqueInput | null
}

export interface GameContentCreateWithoutGenresInput {
  id?: ID_Input | null
  title: String
  content: String
  productionYear: Int
  mainImage?: String | null
  subImage?: String | null
  ProductionNation?: NationCreateOneWithoutGameContentInput | null
}

export interface GameContentCreateWithoutProductionNationInput {
  id?: ID_Input | null
  title: String
  content: String
  productionYear: Int
  mainImage?: String | null
  subImage?: String | null
  genres?: GenreCreateManyWithoutGameContentsInput | null
}

export interface GameContentScalarWhereInput {
  AND?: GameContentScalarWhereInput[] | GameContentScalarWhereInput | null
  OR?: GameContentScalarWhereInput[] | GameContentScalarWhereInput | null
  NOT?: GameContentScalarWhereInput[] | GameContentScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  productionYear?: Int | null
  productionYear_not?: Int | null
  productionYear_in?: Int[] | Int | null
  productionYear_not_in?: Int[] | Int | null
  productionYear_lt?: Int | null
  productionYear_lte?: Int | null
  productionYear_gt?: Int | null
  productionYear_gte?: Int | null
  mainImage?: String | null
  mainImage_not?: String | null
  mainImage_in?: String[] | String | null
  mainImage_not_in?: String[] | String | null
  mainImage_lt?: String | null
  mainImage_lte?: String | null
  mainImage_gt?: String | null
  mainImage_gte?: String | null
  mainImage_contains?: String | null
  mainImage_not_contains?: String | null
  mainImage_starts_with?: String | null
  mainImage_not_starts_with?: String | null
  mainImage_ends_with?: String | null
  mainImage_not_ends_with?: String | null
  subImage?: String | null
  subImage_not?: String | null
  subImage_in?: String[] | String | null
  subImage_not_in?: String[] | String | null
  subImage_lt?: String | null
  subImage_lte?: String | null
  subImage_gt?: String | null
  subImage_gte?: String | null
  subImage_contains?: String | null
  subImage_not_contains?: String | null
  subImage_starts_with?: String | null
  subImage_not_starts_with?: String | null
  subImage_ends_with?: String | null
  subImage_not_ends_with?: String | null
}

export interface GameContentSubscriptionWhereInput {
  AND?: GameContentSubscriptionWhereInput[] | GameContentSubscriptionWhereInput | null
  OR?: GameContentSubscriptionWhereInput[] | GameContentSubscriptionWhereInput | null
  NOT?: GameContentSubscriptionWhereInput[] | GameContentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: GameContentWhereInput | null
}

export interface GameContentUpdateDataInput {
  title?: String | null
  content?: String | null
  productionYear?: Int | null
  mainImage?: String | null
  subImage?: String | null
  genres?: GenreUpdateManyWithoutGameContentsInput | null
  ProductionNation?: NationUpdateOneWithoutGameContentInput | null
}

export interface GameContentUpdateInput {
  title?: String | null
  content?: String | null
  productionYear?: Int | null
  mainImage?: String | null
  subImage?: String | null
  genres?: GenreUpdateManyWithoutGameContentsInput | null
  ProductionNation?: NationUpdateOneWithoutGameContentInput | null
}

export interface GameContentUpdateManyDataInput {
  title?: String | null
  content?: String | null
  productionYear?: Int | null
  mainImage?: String | null
  subImage?: String | null
}

export interface GameContentUpdateManyMutationInput {
  title?: String | null
  content?: String | null
  productionYear?: Int | null
  mainImage?: String | null
  subImage?: String | null
}

export interface GameContentUpdateManyWithoutGenresInput {
  create?: GameContentCreateWithoutGenresInput[] | GameContentCreateWithoutGenresInput | null
  connect?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
  set?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
  disconnect?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
  delete?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
  update?: GameContentUpdateWithWhereUniqueWithoutGenresInput[] | GameContentUpdateWithWhereUniqueWithoutGenresInput | null
  updateMany?: GameContentUpdateManyWithWhereNestedInput[] | GameContentUpdateManyWithWhereNestedInput | null
  deleteMany?: GameContentScalarWhereInput[] | GameContentScalarWhereInput | null
  upsert?: GameContentUpsertWithWhereUniqueWithoutGenresInput[] | GameContentUpsertWithWhereUniqueWithoutGenresInput | null
}

export interface GameContentUpdateManyWithoutProductionNationInput {
  create?: GameContentCreateWithoutProductionNationInput[] | GameContentCreateWithoutProductionNationInput | null
  connect?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
  set?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
  disconnect?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
  delete?: GameContentWhereUniqueInput[] | GameContentWhereUniqueInput | null
  update?: GameContentUpdateWithWhereUniqueWithoutProductionNationInput[] | GameContentUpdateWithWhereUniqueWithoutProductionNationInput | null
  updateMany?: GameContentUpdateManyWithWhereNestedInput[] | GameContentUpdateManyWithWhereNestedInput | null
  deleteMany?: GameContentScalarWhereInput[] | GameContentScalarWhereInput | null
  upsert?: GameContentUpsertWithWhereUniqueWithoutProductionNationInput[] | GameContentUpsertWithWhereUniqueWithoutProductionNationInput | null
}

export interface GameContentUpdateManyWithWhereNestedInput {
  where: GameContentScalarWhereInput
  data: GameContentUpdateManyDataInput
}

export interface GameContentUpdateOneRequiredInput {
  create?: GameContentCreateInput | null
  connect?: GameContentWhereUniqueInput | null
  update?: GameContentUpdateDataInput | null
  upsert?: GameContentUpsertNestedInput | null
}

export interface GameContentUpdateWithoutGenresDataInput {
  title?: String | null
  content?: String | null
  productionYear?: Int | null
  mainImage?: String | null
  subImage?: String | null
  ProductionNation?: NationUpdateOneWithoutGameContentInput | null
}

export interface GameContentUpdateWithoutProductionNationDataInput {
  title?: String | null
  content?: String | null
  productionYear?: Int | null
  mainImage?: String | null
  subImage?: String | null
  genres?: GenreUpdateManyWithoutGameContentsInput | null
}

export interface GameContentUpdateWithWhereUniqueWithoutGenresInput {
  where: GameContentWhereUniqueInput
  data: GameContentUpdateWithoutGenresDataInput
}

export interface GameContentUpdateWithWhereUniqueWithoutProductionNationInput {
  where: GameContentWhereUniqueInput
  data: GameContentUpdateWithoutProductionNationDataInput
}

export interface GameContentUpsertNestedInput {
  update: GameContentUpdateDataInput
  create: GameContentCreateInput
}

export interface GameContentUpsertWithWhereUniqueWithoutGenresInput {
  where: GameContentWhereUniqueInput
  update: GameContentUpdateWithoutGenresDataInput
  create: GameContentCreateWithoutGenresInput
}

export interface GameContentUpsertWithWhereUniqueWithoutProductionNationInput {
  where: GameContentWhereUniqueInput
  update: GameContentUpdateWithoutProductionNationDataInput
  create: GameContentCreateWithoutProductionNationInput
}

export interface GameContentWhereInput {
  AND?: GameContentWhereInput[] | GameContentWhereInput | null
  OR?: GameContentWhereInput[] | GameContentWhereInput | null
  NOT?: GameContentWhereInput[] | GameContentWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  productionYear?: Int | null
  productionYear_not?: Int | null
  productionYear_in?: Int[] | Int | null
  productionYear_not_in?: Int[] | Int | null
  productionYear_lt?: Int | null
  productionYear_lte?: Int | null
  productionYear_gt?: Int | null
  productionYear_gte?: Int | null
  mainImage?: String | null
  mainImage_not?: String | null
  mainImage_in?: String[] | String | null
  mainImage_not_in?: String[] | String | null
  mainImage_lt?: String | null
  mainImage_lte?: String | null
  mainImage_gt?: String | null
  mainImage_gte?: String | null
  mainImage_contains?: String | null
  mainImage_not_contains?: String | null
  mainImage_starts_with?: String | null
  mainImage_not_starts_with?: String | null
  mainImage_ends_with?: String | null
  mainImage_not_ends_with?: String | null
  subImage?: String | null
  subImage_not?: String | null
  subImage_in?: String[] | String | null
  subImage_not_in?: String[] | String | null
  subImage_lt?: String | null
  subImage_lte?: String | null
  subImage_gt?: String | null
  subImage_gte?: String | null
  subImage_contains?: String | null
  subImage_not_contains?: String | null
  subImage_starts_with?: String | null
  subImage_not_starts_with?: String | null
  subImage_ends_with?: String | null
  subImage_not_ends_with?: String | null
  genres_every?: GenreWhereInput | null
  genres_some?: GenreWhereInput | null
  genres_none?: GenreWhereInput | null
  ProductionNation?: NationWhereInput | null
}

export interface GameContentWhereUniqueInput {
  id?: ID_Input | null
}

export interface GenreCreateInput {
  id?: ID_Input | null
  name: String
  gameContents?: GameContentCreateManyWithoutGenresInput | null
}

export interface GenreCreateManyWithoutGameContentsInput {
  create?: GenreCreateWithoutGameContentsInput[] | GenreCreateWithoutGameContentsInput | null
  connect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput | null
}

export interface GenreCreateWithoutGameContentsInput {
  id?: ID_Input | null
  name: String
}

export interface GenreScalarWhereInput {
  AND?: GenreScalarWhereInput[] | GenreScalarWhereInput | null
  OR?: GenreScalarWhereInput[] | GenreScalarWhereInput | null
  NOT?: GenreScalarWhereInput[] | GenreScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface GenreSubscriptionWhereInput {
  AND?: GenreSubscriptionWhereInput[] | GenreSubscriptionWhereInput | null
  OR?: GenreSubscriptionWhereInput[] | GenreSubscriptionWhereInput | null
  NOT?: GenreSubscriptionWhereInput[] | GenreSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: GenreWhereInput | null
}

export interface GenreUpdateInput {
  name?: String | null
  gameContents?: GameContentUpdateManyWithoutGenresInput | null
}

export interface GenreUpdateManyDataInput {
  name?: String | null
}

export interface GenreUpdateManyMutationInput {
  name?: String | null
}

export interface GenreUpdateManyWithoutGameContentsInput {
  create?: GenreCreateWithoutGameContentsInput[] | GenreCreateWithoutGameContentsInput | null
  connect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput | null
  set?: GenreWhereUniqueInput[] | GenreWhereUniqueInput | null
  disconnect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput | null
  delete?: GenreWhereUniqueInput[] | GenreWhereUniqueInput | null
  update?: GenreUpdateWithWhereUniqueWithoutGameContentsInput[] | GenreUpdateWithWhereUniqueWithoutGameContentsInput | null
  updateMany?: GenreUpdateManyWithWhereNestedInput[] | GenreUpdateManyWithWhereNestedInput | null
  deleteMany?: GenreScalarWhereInput[] | GenreScalarWhereInput | null
  upsert?: GenreUpsertWithWhereUniqueWithoutGameContentsInput[] | GenreUpsertWithWhereUniqueWithoutGameContentsInput | null
}

export interface GenreUpdateManyWithWhereNestedInput {
  where: GenreScalarWhereInput
  data: GenreUpdateManyDataInput
}

export interface GenreUpdateWithoutGameContentsDataInput {
  name?: String | null
}

export interface GenreUpdateWithWhereUniqueWithoutGameContentsInput {
  where: GenreWhereUniqueInput
  data: GenreUpdateWithoutGameContentsDataInput
}

export interface GenreUpsertWithWhereUniqueWithoutGameContentsInput {
  where: GenreWhereUniqueInput
  update: GenreUpdateWithoutGameContentsDataInput
  create: GenreCreateWithoutGameContentsInput
}

export interface GenreWhereInput {
  AND?: GenreWhereInput[] | GenreWhereInput | null
  OR?: GenreWhereInput[] | GenreWhereInput | null
  NOT?: GenreWhereInput[] | GenreWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  gameContents_every?: GameContentWhereInput | null
  gameContents_some?: GameContentWhereInput | null
  gameContents_none?: GameContentWhereInput | null
}

export interface GenreWhereUniqueInput {
  id?: ID_Input | null
}

export interface NationCreateInput {
  id?: ID_Input | null
  name: String
  gameContent?: GameContentCreateManyWithoutProductionNationInput | null
}

export interface NationCreateOneWithoutGameContentInput {
  create?: NationCreateWithoutGameContentInput | null
  connect?: NationWhereUniqueInput | null
}

export interface NationCreateWithoutGameContentInput {
  id?: ID_Input | null
  name: String
}

export interface NationSubscriptionWhereInput {
  AND?: NationSubscriptionWhereInput[] | NationSubscriptionWhereInput | null
  OR?: NationSubscriptionWhereInput[] | NationSubscriptionWhereInput | null
  NOT?: NationSubscriptionWhereInput[] | NationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NationWhereInput | null
}

export interface NationUpdateInput {
  name?: String | null
  gameContent?: GameContentUpdateManyWithoutProductionNationInput | null
}

export interface NationUpdateManyMutationInput {
  name?: String | null
}

export interface NationUpdateOneWithoutGameContentInput {
  create?: NationCreateWithoutGameContentInput | null
  connect?: NationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: NationUpdateWithoutGameContentDataInput | null
  upsert?: NationUpsertWithoutGameContentInput | null
}

export interface NationUpdateWithoutGameContentDataInput {
  name?: String | null
}

export interface NationUpsertWithoutGameContentInput {
  update: NationUpdateWithoutGameContentDataInput
  create: NationCreateWithoutGameContentInput
}

export interface NationWhereInput {
  AND?: NationWhereInput[] | NationWhereInput | null
  OR?: NationWhereInput[] | NationWhereInput | null
  NOT?: NationWhereInput[] | NationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  gameContent_every?: GameContentWhereInput | null
  gameContent_some?: GameContentWhereInput | null
  gameContent_none?: GameContentWhereInput | null
}

export interface NationWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  username: String
  email: String
  hash: String
  salt: String
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserRatingCreateInput {
  id?: ID_Input | null
  rating: Int
  user: UserCreateOneInput
  gameContent: GameContentCreateOneInput
}

export interface UserRatingSubscriptionWhereInput {
  AND?: UserRatingSubscriptionWhereInput[] | UserRatingSubscriptionWhereInput | null
  OR?: UserRatingSubscriptionWhereInput[] | UserRatingSubscriptionWhereInput | null
  NOT?: UserRatingSubscriptionWhereInput[] | UserRatingSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserRatingWhereInput | null
}

export interface UserRatingUpdateInput {
  rating?: Int | null
  user?: UserUpdateOneRequiredInput | null
  gameContent?: GameContentUpdateOneRequiredInput | null
}

export interface UserRatingUpdateManyMutationInput {
  rating?: Int | null
}

export interface UserRatingWhereInput {
  AND?: UserRatingWhereInput[] | UserRatingWhereInput | null
  OR?: UserRatingWhereInput[] | UserRatingWhereInput | null
  NOT?: UserRatingWhereInput[] | UserRatingWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  rating?: Int | null
  rating_not?: Int | null
  rating_in?: Int[] | Int | null
  rating_not_in?: Int[] | Int | null
  rating_lt?: Int | null
  rating_lte?: Int | null
  rating_gt?: Int | null
  rating_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  gameContent?: GameContentWhereInput | null
}

export interface UserRatingWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  username?: String | null
  email?: String | null
  hash?: String | null
  salt?: String | null
}

export interface UserUpdateInput {
  username?: String | null
  email?: String | null
  hash?: String | null
  salt?: String | null
}

export interface UserUpdateManyMutationInput {
  username?: String | null
  email?: String | null
  hash?: String | null
  salt?: String | null
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  hash?: String | null
  hash_not?: String | null
  hash_in?: String[] | String | null
  hash_not_in?: String[] | String | null
  hash_lt?: String | null
  hash_lte?: String | null
  hash_gt?: String | null
  hash_gte?: String | null
  hash_contains?: String | null
  hash_not_contains?: String | null
  hash_starts_with?: String | null
  hash_not_starts_with?: String | null
  hash_ends_with?: String | null
  hash_not_ends_with?: String | null
  salt?: String | null
  salt_not?: String | null
  salt_in?: String[] | String | null
  salt_not_in?: String[] | String | null
  salt_lt?: String | null
  salt_lte?: String | null
  salt_gt?: String | null
  salt_gte?: String | null
  salt_contains?: String | null
  salt_not_contains?: String | null
  salt_starts_with?: String | null
  salt_not_starts_with?: String | null
  salt_ends_with?: String | null
  salt_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateFile {
  count: Int
}

export interface AggregateGameContent {
  count: Int
}

export interface AggregateGenre {
  count: Int
}

export interface AggregateNation {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateUserRating {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface File extends Node {
  id: ID_Output
  filename: String
  mimetype: String
  encoding: String
  originalFilename: String
  path: String
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: Array<FileEdge | null>
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface FilePreviousValues {
  id: ID_Output
  filename: String
  mimetype: String
  encoding: String
  originalFilename: String
  path: String
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File | null
  updatedFields?: Array<String> | null
  previousValues?: FilePreviousValues | null
}

export interface GameContent extends Node {
  id: ID_Output
  genres?: Array<Genre> | null
  title: String
  content: String
  productionYear: Int
  ProductionNation?: Nation | null
  mainImage?: String | null
  subImage?: String | null
}

/*
 * A connection to a list of items.

 */
export interface GameContentConnection {
  pageInfo: PageInfo
  edges: Array<GameContentEdge | null>
  aggregate: AggregateGameContent
}

/*
 * An edge in a connection.

 */
export interface GameContentEdge {
  node: GameContent
  cursor: String
}

export interface GameContentPreviousValues {
  id: ID_Output
  title: String
  content: String
  productionYear: Int
  mainImage?: String | null
  subImage?: String | null
}

export interface GameContentSubscriptionPayload {
  mutation: MutationType
  node?: GameContent | null
  updatedFields?: Array<String> | null
  previousValues?: GameContentPreviousValues | null
}

export interface Genre extends Node {
  id: ID_Output
  name: String
  gameContents?: Array<GameContent> | null
}

/*
 * A connection to a list of items.

 */
export interface GenreConnection {
  pageInfo: PageInfo
  edges: Array<GenreEdge | null>
  aggregate: AggregateGenre
}

/*
 * An edge in a connection.

 */
export interface GenreEdge {
  node: Genre
  cursor: String
}

export interface GenrePreviousValues {
  id: ID_Output
  name: String
}

export interface GenreSubscriptionPayload {
  mutation: MutationType
  node?: Genre | null
  updatedFields?: Array<String> | null
  previousValues?: GenrePreviousValues | null
}

export interface Nation extends Node {
  id: ID_Output
  name: String
  gameContent?: Array<GameContent> | null
}

/*
 * A connection to a list of items.

 */
export interface NationConnection {
  pageInfo: PageInfo
  edges: Array<NationEdge | null>
  aggregate: AggregateNation
}

/*
 * An edge in a connection.

 */
export interface NationEdge {
  node: Nation
  cursor: String
}

export interface NationPreviousValues {
  id: ID_Output
  name: String
}

export interface NationSubscriptionPayload {
  mutation: MutationType
  node?: Nation | null
  updatedFields?: Array<String> | null
  previousValues?: NationPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User extends Node {
  id: ID_Output
  username: String
  email: String
  hash: String
  salt: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  username: String
  email: String
  hash: String
  salt: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserRating extends Node {
  id: ID_Output
  user: User
  gameContent: GameContent
  rating: Int
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserRatingConnection {
  pageInfo: PageInfo
  edges: Array<UserRatingEdge | null>
  aggregate: AggregateUserRating
}

/*
 * An edge in a connection.

 */
export interface UserRatingEdge {
  node: UserRating
  cursor: String
}

export interface UserRatingPreviousValues {
  id: ID_Output
  rating: Int
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserRatingSubscriptionPayload {
  mutation: MutationType
  node?: UserRating | null
  updatedFields?: Array<String> | null
  previousValues?: UserRatingPreviousValues | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string