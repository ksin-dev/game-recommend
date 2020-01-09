import State from "~/apollo/states/State"
import { InMemoryCache, Resolver, gql } from "apollo-boost";
import { ClientStateConfig } from 'apollo-link-state';
import { IQuery, IMutation } from '../types';

class Auth extends State {
  token: string;

  constructor() {
    super(Auth.name);
    this.token = window.localStorage.getItem("jwt") || "";
  }

  get isLogin(): boolean {
    return this.token !== "";
  }

}

let auth = new Auth();

const Mutation: IMutation = {
  signup: (_root, { }, { cache }) => {
    return null;
  }
}

const Query: IQuery = {
  login: (_root, args: any, context) => {
    console.log("dd")
  },
  isLogin: (_root, args: any, context) => {
    return localStorage.getItem("jwt");
  }
}

export const queries = {
  IS_LOCAL_LOGIN: gql`
    query isLogin {
      isLogin @client
    }
  `
}



const defaults = {
  auth: new Auth()
}

export default {
  Mutation,
  Query,
  defaults
}