import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-boost';
import AuthState from './Auth';

const cache = new InMemoryCache();


export default {
  stateLink: withClientState({
    cache,
    resolvers: {
      Mutation: {
        ...AuthState.Mutation
      },
      Query: {
        ...AuthState.Query
      }
    },
    defaults: {
      ...AuthState.defaults
    }
  }),
  cache
}


