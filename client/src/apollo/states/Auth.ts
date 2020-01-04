import State from "~/apollo/states/State"
import { InMemoryCache, Resolver } from "apollo-boost";
import { ClientStateConfig } from 'apollo-link-state';
import { IQuery, IMutation } from '../types';


const Mutation: IMutation = {
  signup: (_root, { }, { cache }) => {
    console.log(cache);

    return null;
  }
}

const Query: IQuery = {
  login: (_root, args: any, context) => {
    console.log(_);
    return "good";
  }
}

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

const defaults = {
  auth: new Auth()
}

export default {
  Mutation,
  Query,
  defaults
}