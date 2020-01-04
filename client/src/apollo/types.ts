import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject, CacheResolverMap } from 'apollo-cache-inmemory';

export type GetCacheKeyInput = {
  __typename: string,
  id?: string
}

export type Resolver<TVariables = any, TReturn = any> = (_root: any, variables: TVariables, context: IContext) => TReturn;

export interface IContext<stateType = any> {
  client: ApolloClient<NormalizedCacheObject>
  cache: InMemoryCache,
  getCacheKey: (getCacheKeyInput: GetCacheKeyInput) => stateType;
}


export type IMutation = {
  [funcname: string]: Resolver<any, null>
}

export type IQuery = {
  [funcName: string]: Resolver;
}


