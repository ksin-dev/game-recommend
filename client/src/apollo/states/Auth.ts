import State from "~/apollo/states/State"
import { InMemoryCache, Resolver, gql } from "apollo-boost";
import { ClientStateConfig } from 'apollo-link-state';
import { IQuery, IMutation } from '../types';
import jwtDecode from 'jwt-decode'

class Me extends State {
  id = "";
  username = "";
  constructor() {
    super(Me.name);
    const jwt = window.localStorage.getItem("jwt");

    if (jwt) {
      const decode = jwtDecode(jwt) as Me;
      this.id = decode.id;
      this.username = decode.username;
    }
  }

}


const Mutation: IMutation = {
  localLogin: (_root, { jwt }: any, { cache }) => {
    localStorage.setItem("jwt", jwt);
    const decode = jwtDecode(jwt) as object;
    cache.writeData({ data: { isLogin: true, me: { ...decode, __typename: "me" } } })
    return true;
  },
  localLogout: (_root, args: any, { cache }) => {
    localStorage.removeItem("jwt");

    cache.writeData({ data: { isLogin: false, me: { id: null, __typename: "me" } } })

    return true;
  }
}

const Query: IQuery = {
  isLogin: (_root, args: any, context) => {
    return !!localStorage.getItem("jwt");
  }
}



export const queries = {
  IS_LOCAL_LOGIN: gql`
  {
    isLogin @client
    me @client {
      id
    } 
  }
  `,
  LOCAL_LOGOUT: gql`
    mutation {
      localLogout @client
    }
  `
}



export default {
  Mutation,
  Query,
  defaults: {
    isLogin: !!localStorage.getItem("jwt"),
    me: new Me()
  }
}