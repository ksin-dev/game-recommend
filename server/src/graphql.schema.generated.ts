
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum FileOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    filename_ASC = "filename_ASC",
    filename_DESC = "filename_DESC",
    mimetype_ASC = "mimetype_ASC",
    mimetype_DESC = "mimetype_DESC",
    encoding_ASC = "encoding_ASC",
    encoding_DESC = "encoding_DESC",
    originalFilename_ASC = "originalFilename_ASC",
    originalFilename_DESC = "originalFilename_DESC",
    path_ASC = "path_ASC",
    path_DESC = "path_DESC"
}

export enum GameContentOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    content_ASC = "content_ASC",
    content_DESC = "content_DESC",
    productionYear_ASC = "productionYear_ASC",
    productionYear_DESC = "productionYear_DESC",
    mainImage_ASC = "mainImage_ASC",
    mainImage_DESC = "mainImage_DESC",
    subImage_ASC = "subImage_ASC",
    subImage_DESC = "subImage_DESC",
    youtubeId_ASC = "youtubeId_ASC",
    youtubeId_DESC = "youtubeId_DESC"
}

export enum GenreOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum NationOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    username_ASC = "username_ASC",
    username_DESC = "username_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    hash_ASC = "hash_ASC",
    hash_DESC = "hash_DESC",
    salt_ASC = "salt_ASC",
    salt_DESC = "salt_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum UserRatingOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    rating_ASC = "rating_ASC",
    rating_DESC = "rating_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export class FileCreateInput {
    id?: string;
    filename: string;
    mimetype: string;
    encoding: string;
    originalFilename: string;
    path: string;
}

export class FileSubscriptionWhereInput {
    AND?: FileSubscriptionWhereInput[];
    OR?: FileSubscriptionWhereInput[];
    NOT?: FileSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: FileWhereInput;
}

export class FileUpdateInput {
    filename?: string;
    mimetype?: string;
    encoding?: string;
    originalFilename?: string;
    path?: string;
}

export class FileUpdateManyMutationInput {
    filename?: string;
    mimetype?: string;
    encoding?: string;
    originalFilename?: string;
    path?: string;
}

export class FileWhereInput {
    AND?: FileWhereInput[];
    OR?: FileWhereInput[];
    NOT?: FileWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    filename?: string;
    filename_not?: string;
    filename_in?: string[];
    filename_not_in?: string[];
    filename_lt?: string;
    filename_lte?: string;
    filename_gt?: string;
    filename_gte?: string;
    filename_contains?: string;
    filename_not_contains?: string;
    filename_starts_with?: string;
    filename_not_starts_with?: string;
    filename_ends_with?: string;
    filename_not_ends_with?: string;
    mimetype?: string;
    mimetype_not?: string;
    mimetype_in?: string[];
    mimetype_not_in?: string[];
    mimetype_lt?: string;
    mimetype_lte?: string;
    mimetype_gt?: string;
    mimetype_gte?: string;
    mimetype_contains?: string;
    mimetype_not_contains?: string;
    mimetype_starts_with?: string;
    mimetype_not_starts_with?: string;
    mimetype_ends_with?: string;
    mimetype_not_ends_with?: string;
    encoding?: string;
    encoding_not?: string;
    encoding_in?: string[];
    encoding_not_in?: string[];
    encoding_lt?: string;
    encoding_lte?: string;
    encoding_gt?: string;
    encoding_gte?: string;
    encoding_contains?: string;
    encoding_not_contains?: string;
    encoding_starts_with?: string;
    encoding_not_starts_with?: string;
    encoding_ends_with?: string;
    encoding_not_ends_with?: string;
    originalFilename?: string;
    originalFilename_not?: string;
    originalFilename_in?: string[];
    originalFilename_not_in?: string[];
    originalFilename_lt?: string;
    originalFilename_lte?: string;
    originalFilename_gt?: string;
    originalFilename_gte?: string;
    originalFilename_contains?: string;
    originalFilename_not_contains?: string;
    originalFilename_starts_with?: string;
    originalFilename_not_starts_with?: string;
    originalFilename_ends_with?: string;
    originalFilename_not_ends_with?: string;
    path?: string;
    path_not?: string;
    path_in?: string[];
    path_not_in?: string[];
    path_lt?: string;
    path_lte?: string;
    path_gt?: string;
    path_gte?: string;
    path_contains?: string;
    path_not_contains?: string;
    path_starts_with?: string;
    path_not_starts_with?: string;
    path_ends_with?: string;
    path_not_ends_with?: string;
}

export class FileWhereUniqueInput {
    id?: string;
}

export class GameContentCreateInput {
    id?: string;
    title: string;
    content: string;
    productionYear: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
    genres?: GenreCreateManyWithoutGameContentsInput;
    ProductionNation?: NationCreateOneWithoutGameContentInput;
}

export class GameContentCreateManyWithoutGenresInput {
    create?: GameContentCreateWithoutGenresInput[];
    connect?: GameContentWhereUniqueInput[];
}

export class GameContentCreateManyWithoutProductionNationInput {
    create?: GameContentCreateWithoutProductionNationInput[];
    connect?: GameContentWhereUniqueInput[];
}

export class GameContentCreateOneInput {
    create?: GameContentCreateInput;
    connect?: GameContentWhereUniqueInput;
}

export class GameContentCreateWithoutGenresInput {
    id?: string;
    title: string;
    content: string;
    productionYear: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
    ProductionNation?: NationCreateOneWithoutGameContentInput;
}

export class GameContentCreateWithoutProductionNationInput {
    id?: string;
    title: string;
    content: string;
    productionYear: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
    genres?: GenreCreateManyWithoutGameContentsInput;
}

export class GameContentScalarWhereInput {
    AND?: GameContentScalarWhereInput[];
    OR?: GameContentScalarWhereInput[];
    NOT?: GameContentScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in?: string[];
    title_not_in?: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in?: string[];
    content_not_in?: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    productionYear?: number;
    productionYear_not?: number;
    productionYear_in?: number[];
    productionYear_not_in?: number[];
    productionYear_lt?: number;
    productionYear_lte?: number;
    productionYear_gt?: number;
    productionYear_gte?: number;
    mainImage?: string;
    mainImage_not?: string;
    mainImage_in?: string[];
    mainImage_not_in?: string[];
    mainImage_lt?: string;
    mainImage_lte?: string;
    mainImage_gt?: string;
    mainImage_gte?: string;
    mainImage_contains?: string;
    mainImage_not_contains?: string;
    mainImage_starts_with?: string;
    mainImage_not_starts_with?: string;
    mainImage_ends_with?: string;
    mainImage_not_ends_with?: string;
    subImage?: string;
    subImage_not?: string;
    subImage_in?: string[];
    subImage_not_in?: string[];
    subImage_lt?: string;
    subImage_lte?: string;
    subImage_gt?: string;
    subImage_gte?: string;
    subImage_contains?: string;
    subImage_not_contains?: string;
    subImage_starts_with?: string;
    subImage_not_starts_with?: string;
    subImage_ends_with?: string;
    subImage_not_ends_with?: string;
    youtubeId?: string;
    youtubeId_not?: string;
    youtubeId_in?: string[];
    youtubeId_not_in?: string[];
    youtubeId_lt?: string;
    youtubeId_lte?: string;
    youtubeId_gt?: string;
    youtubeId_gte?: string;
    youtubeId_contains?: string;
    youtubeId_not_contains?: string;
    youtubeId_starts_with?: string;
    youtubeId_not_starts_with?: string;
    youtubeId_ends_with?: string;
    youtubeId_not_ends_with?: string;
}

export class GameContentSubscriptionWhereInput {
    AND?: GameContentSubscriptionWhereInput[];
    OR?: GameContentSubscriptionWhereInput[];
    NOT?: GameContentSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: GameContentWhereInput;
}

export class GameContentUpdateDataInput {
    title?: string;
    content?: string;
    productionYear?: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
    genres?: GenreUpdateManyWithoutGameContentsInput;
    ProductionNation?: NationUpdateOneWithoutGameContentInput;
}

export class GameContentUpdateInput {
    title?: string;
    content?: string;
    productionYear?: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
    genres?: GenreUpdateManyWithoutGameContentsInput;
    ProductionNation?: NationUpdateOneWithoutGameContentInput;
}

export class GameContentUpdateManyDataInput {
    title?: string;
    content?: string;
    productionYear?: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
}

export class GameContentUpdateManyMutationInput {
    title?: string;
    content?: string;
    productionYear?: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
}

export class GameContentUpdateManyWithoutGenresInput {
    create?: GameContentCreateWithoutGenresInput[];
    connect?: GameContentWhereUniqueInput[];
    set?: GameContentWhereUniqueInput[];
    disconnect?: GameContentWhereUniqueInput[];
    delete?: GameContentWhereUniqueInput[];
    update?: GameContentUpdateWithWhereUniqueWithoutGenresInput[];
    updateMany?: GameContentUpdateManyWithWhereNestedInput[];
    deleteMany?: GameContentScalarWhereInput[];
    upsert?: GameContentUpsertWithWhereUniqueWithoutGenresInput[];
}

export class GameContentUpdateManyWithoutProductionNationInput {
    create?: GameContentCreateWithoutProductionNationInput[];
    connect?: GameContentWhereUniqueInput[];
    set?: GameContentWhereUniqueInput[];
    disconnect?: GameContentWhereUniqueInput[];
    delete?: GameContentWhereUniqueInput[];
    update?: GameContentUpdateWithWhereUniqueWithoutProductionNationInput[];
    updateMany?: GameContentUpdateManyWithWhereNestedInput[];
    deleteMany?: GameContentScalarWhereInput[];
    upsert?: GameContentUpsertWithWhereUniqueWithoutProductionNationInput[];
}

export class GameContentUpdateManyWithWhereNestedInput {
    where: GameContentScalarWhereInput;
    data: GameContentUpdateManyDataInput;
}

export class GameContentUpdateOneRequiredInput {
    create?: GameContentCreateInput;
    connect?: GameContentWhereUniqueInput;
    update?: GameContentUpdateDataInput;
    upsert?: GameContentUpsertNestedInput;
}

export class GameContentUpdateWithoutGenresDataInput {
    title?: string;
    content?: string;
    productionYear?: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
    ProductionNation?: NationUpdateOneWithoutGameContentInput;
}

export class GameContentUpdateWithoutProductionNationDataInput {
    title?: string;
    content?: string;
    productionYear?: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
    genres?: GenreUpdateManyWithoutGameContentsInput;
}

export class GameContentUpdateWithWhereUniqueWithoutGenresInput {
    where: GameContentWhereUniqueInput;
    data: GameContentUpdateWithoutGenresDataInput;
}

export class GameContentUpdateWithWhereUniqueWithoutProductionNationInput {
    where: GameContentWhereUniqueInput;
    data: GameContentUpdateWithoutProductionNationDataInput;
}

export class GameContentUpsertNestedInput {
    update: GameContentUpdateDataInput;
    create: GameContentCreateInput;
}

export class GameContentUpsertWithWhereUniqueWithoutGenresInput {
    where: GameContentWhereUniqueInput;
    update: GameContentUpdateWithoutGenresDataInput;
    create: GameContentCreateWithoutGenresInput;
}

export class GameContentUpsertWithWhereUniqueWithoutProductionNationInput {
    where: GameContentWhereUniqueInput;
    update: GameContentUpdateWithoutProductionNationDataInput;
    create: GameContentCreateWithoutProductionNationInput;
}

export class GameContentWhereInput {
    AND?: GameContentWhereInput[];
    OR?: GameContentWhereInput[];
    NOT?: GameContentWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in?: string[];
    title_not_in?: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in?: string[];
    content_not_in?: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    productionYear?: number;
    productionYear_not?: number;
    productionYear_in?: number[];
    productionYear_not_in?: number[];
    productionYear_lt?: number;
    productionYear_lte?: number;
    productionYear_gt?: number;
    productionYear_gte?: number;
    mainImage?: string;
    mainImage_not?: string;
    mainImage_in?: string[];
    mainImage_not_in?: string[];
    mainImage_lt?: string;
    mainImage_lte?: string;
    mainImage_gt?: string;
    mainImage_gte?: string;
    mainImage_contains?: string;
    mainImage_not_contains?: string;
    mainImage_starts_with?: string;
    mainImage_not_starts_with?: string;
    mainImage_ends_with?: string;
    mainImage_not_ends_with?: string;
    subImage?: string;
    subImage_not?: string;
    subImage_in?: string[];
    subImage_not_in?: string[];
    subImage_lt?: string;
    subImage_lte?: string;
    subImage_gt?: string;
    subImage_gte?: string;
    subImage_contains?: string;
    subImage_not_contains?: string;
    subImage_starts_with?: string;
    subImage_not_starts_with?: string;
    subImage_ends_with?: string;
    subImage_not_ends_with?: string;
    youtubeId?: string;
    youtubeId_not?: string;
    youtubeId_in?: string[];
    youtubeId_not_in?: string[];
    youtubeId_lt?: string;
    youtubeId_lte?: string;
    youtubeId_gt?: string;
    youtubeId_gte?: string;
    youtubeId_contains?: string;
    youtubeId_not_contains?: string;
    youtubeId_starts_with?: string;
    youtubeId_not_starts_with?: string;
    youtubeId_ends_with?: string;
    youtubeId_not_ends_with?: string;
    genres_every?: GenreWhereInput;
    genres_some?: GenreWhereInput;
    genres_none?: GenreWhereInput;
    ProductionNation?: NationWhereInput;
}

export class GameContentWhereUniqueInput {
    id?: string;
}

export class GenreCreateInput {
    id?: string;
    name: string;
    gameContents?: GameContentCreateManyWithoutGenresInput;
}

export class GenreCreateManyWithoutGameContentsInput {
    create?: GenreCreateWithoutGameContentsInput[];
    connect?: GenreWhereUniqueInput[];
}

export class GenreCreateWithoutGameContentsInput {
    id?: string;
    name: string;
}

export class GenreScalarWhereInput {
    AND?: GenreScalarWhereInput[];
    OR?: GenreScalarWhereInput[];
    NOT?: GenreScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
}

export class GenreSubscriptionWhereInput {
    AND?: GenreSubscriptionWhereInput[];
    OR?: GenreSubscriptionWhereInput[];
    NOT?: GenreSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: GenreWhereInput;
}

export class GenreUpdateInput {
    name?: string;
    gameContents?: GameContentUpdateManyWithoutGenresInput;
}

export class GenreUpdateManyDataInput {
    name?: string;
}

export class GenreUpdateManyMutationInput {
    name?: string;
}

export class GenreUpdateManyWithoutGameContentsInput {
    create?: GenreCreateWithoutGameContentsInput[];
    connect?: GenreWhereUniqueInput[];
    set?: GenreWhereUniqueInput[];
    disconnect?: GenreWhereUniqueInput[];
    delete?: GenreWhereUniqueInput[];
    update?: GenreUpdateWithWhereUniqueWithoutGameContentsInput[];
    updateMany?: GenreUpdateManyWithWhereNestedInput[];
    deleteMany?: GenreScalarWhereInput[];
    upsert?: GenreUpsertWithWhereUniqueWithoutGameContentsInput[];
}

export class GenreUpdateManyWithWhereNestedInput {
    where: GenreScalarWhereInput;
    data: GenreUpdateManyDataInput;
}

export class GenreUpdateWithoutGameContentsDataInput {
    name?: string;
}

export class GenreUpdateWithWhereUniqueWithoutGameContentsInput {
    where: GenreWhereUniqueInput;
    data: GenreUpdateWithoutGameContentsDataInput;
}

export class GenreUpsertWithWhereUniqueWithoutGameContentsInput {
    where: GenreWhereUniqueInput;
    update: GenreUpdateWithoutGameContentsDataInput;
    create: GenreCreateWithoutGameContentsInput;
}

export class GenreWhereInput {
    AND?: GenreWhereInput[];
    OR?: GenreWhereInput[];
    NOT?: GenreWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    gameContents_every?: GameContentWhereInput;
    gameContents_some?: GameContentWhereInput;
    gameContents_none?: GameContentWhereInput;
}

export class GenreWhereUniqueInput {
    id?: string;
}

export class NationCreateInput {
    id?: string;
    name: string;
    gameContent?: GameContentCreateManyWithoutProductionNationInput;
}

export class NationCreateOneWithoutGameContentInput {
    create?: NationCreateWithoutGameContentInput;
    connect?: NationWhereUniqueInput;
}

export class NationCreateWithoutGameContentInput {
    id?: string;
    name: string;
}

export class NationSubscriptionWhereInput {
    AND?: NationSubscriptionWhereInput[];
    OR?: NationSubscriptionWhereInput[];
    NOT?: NationSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: NationWhereInput;
}

export class NationUpdateInput {
    name?: string;
    gameContent?: GameContentUpdateManyWithoutProductionNationInput;
}

export class NationUpdateManyMutationInput {
    name?: string;
}

export class NationUpdateOneWithoutGameContentInput {
    create?: NationCreateWithoutGameContentInput;
    connect?: NationWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: NationUpdateWithoutGameContentDataInput;
    upsert?: NationUpsertWithoutGameContentInput;
}

export class NationUpdateWithoutGameContentDataInput {
    name?: string;
}

export class NationUpsertWithoutGameContentInput {
    update: NationUpdateWithoutGameContentDataInput;
    create: NationCreateWithoutGameContentInput;
}

export class NationWhereInput {
    AND?: NationWhereInput[];
    OR?: NationWhereInput[];
    NOT?: NationWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    gameContent_every?: GameContentWhereInput;
    gameContent_some?: GameContentWhereInput;
    gameContent_none?: GameContentWhereInput;
}

export class NationWhereUniqueInput {
    id?: string;
}

export class SignupInput {
    username: string;
    email: string;
    password: string;
}

export class UserCreateInput {
    id?: string;
    username: string;
    email: string;
    hash: string;
    salt: string;
}

export class UserCreateOneInput {
    create?: UserCreateInput;
    connect?: UserWhereUniqueInput;
}

export class UserRatingCreateInput {
    id?: string;
    rating: number;
    user: UserCreateOneInput;
    gameContent: GameContentCreateOneInput;
}

export class UserRatingSubscriptionWhereInput {
    AND?: UserRatingSubscriptionWhereInput[];
    OR?: UserRatingSubscriptionWhereInput[];
    NOT?: UserRatingSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserRatingWhereInput;
}

export class UserRatingUpdateInput {
    rating?: number;
    user?: UserUpdateOneRequiredInput;
    gameContent?: GameContentUpdateOneRequiredInput;
}

export class UserRatingUpdateManyMutationInput {
    rating?: number;
}

export class UserRatingWhereInput {
    AND?: UserRatingWhereInput[];
    OR?: UserRatingWhereInput[];
    NOT?: UserRatingWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    rating?: number;
    rating_not?: number;
    rating_in?: number[];
    rating_not_in?: number[];
    rating_lt?: number;
    rating_lte?: number;
    rating_gt?: number;
    rating_gte?: number;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    user?: UserWhereInput;
    gameContent?: GameContentWhereInput;
}

export class UserRatingWhereUniqueInput {
    id?: string;
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateDataInput {
    username?: string;
    email?: string;
    hash?: string;
    salt?: string;
}

export class UserUpdateInput {
    username?: string;
    email?: string;
    hash?: string;
    salt?: string;
}

export class UserUpdateManyMutationInput {
    username?: string;
    email?: string;
    hash?: string;
    salt?: string;
}

export class UserUpdateOneRequiredInput {
    create?: UserCreateInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateDataInput;
    upsert?: UserUpsertNestedInput;
}

export class UserUpsertNestedInput {
    update: UserUpdateDataInput;
    create: UserCreateInput;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    username?: string;
    username_not?: string;
    username_in?: string[];
    username_not_in?: string[];
    username_lt?: string;
    username_lte?: string;
    username_gt?: string;
    username_gte?: string;
    username_contains?: string;
    username_not_contains?: string;
    username_starts_with?: string;
    username_not_starts_with?: string;
    username_ends_with?: string;
    username_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    hash?: string;
    hash_not?: string;
    hash_in?: string[];
    hash_not_in?: string[];
    hash_lt?: string;
    hash_lte?: string;
    hash_gt?: string;
    hash_gte?: string;
    hash_contains?: string;
    hash_not_contains?: string;
    hash_starts_with?: string;
    hash_not_starts_with?: string;
    hash_ends_with?: string;
    hash_not_ends_with?: string;
    salt?: string;
    salt_not?: string;
    salt_in?: string[];
    salt_not_in?: string[];
    salt_lt?: string;
    salt_lte?: string;
    salt_gt?: string;
    salt_gte?: string;
    salt_contains?: string;
    salt_not_contains?: string;
    salt_starts_with?: string;
    salt_not_starts_with?: string;
    salt_ends_with?: string;
    salt_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export class UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export interface Node {
    id: string;
}

export class AggregateFile {
    count: number;
}

export class AggregateGameContent {
    count: number;
}

export class AggregateGenre {
    count: number;
}

export class AggregateNation {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class AggregateUserRating {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class File implements Node {
    id: string;
    filename: string;
    mimetype: string;
    encoding: string;
    originalFilename: string;
    path: string;
}

export class FileConnection {
    pageInfo: PageInfo;
    edges: FileEdge[];
    aggregate: AggregateFile;
}

export class FileEdge {
    node: File;
    cursor: string;
}

export class FilePreviousValues {
    id: string;
    filename: string;
    mimetype: string;
    encoding: string;
    originalFilename: string;
    path: string;
}

export class FileSubscriptionPayload {
    mutation: MutationType;
    node?: File;
    updatedFields?: string[];
    previousValues?: FilePreviousValues;
}

export class GameContent implements Node {
    id: string;
    genres?: Genre[];
    title: string;
    content: string;
    productionYear: number;
    ProductionNation?: Nation;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
}

export class GameContentConnection {
    pageInfo: PageInfo;
    edges: GameContentEdge[];
    aggregate: AggregateGameContent;
}

export class GameContentEdge {
    node: GameContent;
    cursor: string;
}

export class GameContentPreviousValues {
    id: string;
    title: string;
    content: string;
    productionYear: number;
    mainImage?: string;
    subImage?: string;
    youtubeId?: string;
}

export class GameContentSubscriptionPayload {
    mutation: MutationType;
    node?: GameContent;
    updatedFields?: string[];
    previousValues?: GameContentPreviousValues;
}

export class Genre implements Node {
    id: string;
    name: string;
    gameContents?: GameContent[];
}

export class GenreConnection {
    pageInfo: PageInfo;
    edges: GenreEdge[];
    aggregate: AggregateGenre;
}

export class GenreEdge {
    node: Genre;
    cursor: string;
}

export class GenrePreviousValues {
    id: string;
    name: string;
}

export class GenreSubscriptionPayload {
    mutation: MutationType;
    node?: Genre;
    updatedFields?: string[];
    previousValues?: GenrePreviousValues;
}

export abstract class IMutation {
    abstract signup(signupInput: SignupInput): UserInfo | Promise<UserInfo>;

    abstract uploadFile(file?: Upload): File | Promise<File>;

    abstract createFile(data: FileCreateInput): File | Promise<File>;

    abstract createGenre(data: GenreCreateInput): Genre | Promise<Genre>;

    abstract createNation(data: NationCreateInput): Nation | Promise<Nation>;

    abstract createUserRating(data: UserRatingCreateInput): UserRating | Promise<UserRating>;

    abstract createUser(data: UserCreateInput): User | Promise<User>;

    abstract createGameContent(data: GameContentCreateInput): GameContent | Promise<GameContent>;

    abstract updateFile(data: FileUpdateInput, where: FileWhereUniqueInput): File | Promise<File>;

    abstract updateGenre(data: GenreUpdateInput, where: GenreWhereUniqueInput): Genre | Promise<Genre>;

    abstract updateNation(data: NationUpdateInput, where: NationWhereUniqueInput): Nation | Promise<Nation>;

    abstract updateUserRating(data: UserRatingUpdateInput, where: UserRatingWhereUniqueInput): UserRating | Promise<UserRating>;

    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;

    abstract updateGameContent(data: GameContentUpdateInput, where: GameContentWhereUniqueInput): GameContent | Promise<GameContent>;

    abstract deleteFile(where: FileWhereUniqueInput): File | Promise<File>;

    abstract deleteGenre(where: GenreWhereUniqueInput): Genre | Promise<Genre>;

    abstract deleteNation(where: NationWhereUniqueInput): Nation | Promise<Nation>;

    abstract deleteUserRating(where: UserRatingWhereUniqueInput): UserRating | Promise<UserRating>;

    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;

    abstract deleteGameContent(where: GameContentWhereUniqueInput): GameContent | Promise<GameContent>;

    abstract upsertFile(where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput): File | Promise<File>;

    abstract upsertGenre(where: GenreWhereUniqueInput, create: GenreCreateInput, update: GenreUpdateInput): Genre | Promise<Genre>;

    abstract upsertNation(where: NationWhereUniqueInput, create: NationCreateInput, update: NationUpdateInput): Nation | Promise<Nation>;

    abstract upsertUserRating(where: UserRatingWhereUniqueInput, create: UserRatingCreateInput, update: UserRatingUpdateInput): UserRating | Promise<UserRating>;

    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;

    abstract upsertGameContent(where: GameContentWhereUniqueInput, create: GameContentCreateInput, update: GameContentUpdateInput): GameContent | Promise<GameContent>;

    abstract updateManyFiles(data: FileUpdateManyMutationInput, where?: FileWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyGenres(data: GenreUpdateManyMutationInput, where?: GenreWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyNations(data: NationUpdateManyMutationInput, where?: NationWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyUserRatings(data: UserRatingUpdateManyMutationInput, where?: UserRatingWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyGameContents(data: GameContentUpdateManyMutationInput, where?: GameContentWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyFiles(where?: FileWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyGenres(where?: GenreWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyNations(where?: NationWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUserRatings(where?: UserRatingWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyGameContents(where?: GameContentWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract editUserRating(gameContentId: string, rating: number): UserRating | Promise<UserRating>;
}

export class Nation implements Node {
    id: string;
    name: string;
    gameContent?: GameContent[];
}

export class NationConnection {
    pageInfo: PageInfo;
    edges: NationEdge[];
    aggregate: AggregateNation;
}

export class NationEdge {
    node: Nation;
    cursor: string;
}

export class NationPreviousValues {
    id: string;
    name: string;
}

export class NationSubscriptionPayload {
    mutation: MutationType;
    node?: Nation;
    updatedFields?: string[];
    previousValues?: NationPreviousValues;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract login(email: string, password: string): UserInfo | Promise<UserInfo>;

    abstract files(where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): File[] | Promise<File[]>;

    abstract genres(where?: GenreWhereInput, orderBy?: GenreOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Genre[] | Promise<Genre[]>;

    abstract nations(where?: NationWhereInput, orderBy?: NationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Nation[] | Promise<Nation[]>;

    abstract userRatings(where?: UserRatingWhereInput, orderBy?: UserRatingOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserRating[] | Promise<UserRating[]>;

    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;

    abstract gameContents(where?: GameContentWhereInput, orderBy?: GameContentOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): GameContent[] | Promise<GameContent[]>;

    abstract file(where: FileWhereUniqueInput): File | Promise<File>;

    abstract genre(where: GenreWhereUniqueInput): Genre | Promise<Genre>;

    abstract nation(where: NationWhereUniqueInput): Nation | Promise<Nation>;

    abstract userRating(where: UserRatingWhereUniqueInput): UserRating | Promise<UserRating>;

    abstract user(where: UserWhereUniqueInput): User | Promise<User>;

    abstract gameContent(where: GameContentWhereUniqueInput): GameContent | Promise<GameContent>;

    abstract filesConnection(where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): FileConnection | Promise<FileConnection>;

    abstract genresConnection(where?: GenreWhereInput, orderBy?: GenreOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): GenreConnection | Promise<GenreConnection>;

    abstract nationsConnection(where?: NationWhereInput, orderBy?: NationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): NationConnection | Promise<NationConnection>;

    abstract userRatingsConnection(where?: UserRatingWhereInput, orderBy?: UserRatingOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserRatingConnection | Promise<UserRatingConnection>;

    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;

    abstract gameContentsConnection(where?: GameContentWhereInput, orderBy?: GameContentOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): GameContentConnection | Promise<GameContentConnection>;

    abstract node(id: string): Node | Promise<Node>;

    abstract userRatingsByUser(userId: string): UserRating[] | Promise<UserRating[]>;

    abstract userRatingByGameContent(gameContentId: string): UserRating | Promise<UserRating>;
}

export abstract class ISubscription {
    abstract file(where?: FileSubscriptionWhereInput): FileSubscriptionPayload | Promise<FileSubscriptionPayload>;

    abstract genre(where?: GenreSubscriptionWhereInput): GenreSubscriptionPayload | Promise<GenreSubscriptionPayload>;

    abstract nation(where?: NationSubscriptionWhereInput): NationSubscriptionPayload | Promise<NationSubscriptionPayload>;

    abstract userRating(where?: UserRatingSubscriptionWhereInput): UserRatingSubscriptionPayload | Promise<UserRatingSubscriptionPayload>;

    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;

    abstract gameContent(where?: GameContentSubscriptionWhereInput): GameContentSubscriptionPayload | Promise<GameContentSubscriptionPayload>;
}

export class User implements Node {
    id: string;
    username: string;
    email: string;
    hash: string;
    salt: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserInfo {
    jwt: string;
}

export class UserPreviousValues {
    id: string;
    username: string;
    email: string;
    hash: string;
    salt: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class UserRating implements Node {
    id: string;
    user: User;
    gameContent: GameContent;
    rating: number;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class UserRatingConnection {
    pageInfo: PageInfo;
    edges: UserRatingEdge[];
    aggregate: AggregateUserRating;
}

export class UserRatingEdge {
    node: UserRating;
    cursor: string;
}

export class UserRatingPreviousValues {
    id: string;
    rating: number;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class UserRatingSubscriptionPayload {
    mutation: MutationType;
    node?: UserRating;
    updatedFields?: string[];
    previousValues?: UserRatingPreviousValues;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Long = any;
export type token = any;
export type Upload = any;
