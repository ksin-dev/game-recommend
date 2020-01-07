import { User } from "src/prisma/prisma.binding"

export type UserSignupType = {
  username: string;
  email: string;
  password: string;
}

export type GeneratedHash = {
  hash: string;
  salt: string;
}

export type UserInfo = {
  jwt: string;
}