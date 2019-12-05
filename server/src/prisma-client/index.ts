
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum MessageOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export class MessageCreateInput {
    id?: string;
    description: string;
}

export class MessageSubscriptionWhereInput {
    AND?: MessageSubscriptionWhereInput[];
    OR?: MessageSubscriptionWhereInput[];
    NOT?: MessageSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: MessageWhereInput;
}

export class MessageUpdateInput {
    description?: string;
}

export class MessageUpdateManyMutationInput {
    description?: string;
}

export class MessageWhereInput {
    AND?: MessageWhereInput[];
    OR?: MessageWhereInput[];
    NOT?: MessageWhereInput[];
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
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
}

export class MessageWhereUniqueInput {
    id?: string;
}

export class UserCreateInput {
    id?: string;
    name: string;
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

export class UserUpdateInput {
    name?: string;
}

export class UserUpdateManyMutationInput {
    name?: string;
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

export class UserWhereUniqueInput {
    id?: string;
}

export interface Node {
    id: string;
}

export class AggregateMessage {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Message implements Node {
    id: string;
    description: string;
}

export class MessageConnection {
    pageInfo: PageInfo;
    edges: MessageEdge[];
    aggregate: AggregateMessage;
}

export class MessageEdge {
    node: Message;
    cursor: string;
}

export class MessagePreviousValues {
    id: string;
    description: string;
}

export class MessageSubscriptionPayload {
    mutation: MutationType;
    node?: Message;
    updatedFields?: string[];
    previousValues?: MessagePreviousValues;
}

export abstract class IMutation {
    abstract createUser(data: UserCreateInput): User | Promise<User>;

    abstract createMessage(data: MessageCreateInput): Message | Promise<Message>;

    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;

    abstract updateMessage(data: MessageUpdateInput, where: MessageWhereUniqueInput): Message | Promise<Message>;

    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;

    abstract deleteMessage(where: MessageWhereUniqueInput): Message | Promise<Message>;

    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;

    abstract upsertMessage(where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput): Message | Promise<Message>;

    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyMessages(data: MessageUpdateManyMutationInput, where?: MessageWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyMessages(where?: MessageWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;

    abstract messages(where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Message[] | Promise<Message[]>;

    abstract user(where: UserWhereUniqueInput): User | Promise<User>;

    abstract message(where: MessageWhereUniqueInput): Message | Promise<Message>;

    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;

    abstract messagesConnection(where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MessageConnection | Promise<MessageConnection>;

    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;

    abstract message(where?: MessageSubscriptionWhereInput): MessageSubscriptionPayload | Promise<MessageSubscriptionPayload>;
}

export class User implements Node {
    id: string;
    name: string;
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

export class UserPreviousValues {
    id: string;
    name: string;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type Long = any;
