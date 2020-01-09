
export type UserSignupType = {
  username: string;
  email: string;
  password: string;
}

export type UserLoginType = {
  email: string;
  password: string;
}

export interface IUser {
  username?: string;
  email: string;
}

export interface IUserInfo extends IUser {
  token: string;
}

