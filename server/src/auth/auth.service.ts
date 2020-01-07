import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserWhereInput, User, UserCreateInput } from '../prisma/prisma.binding';
import { UserSignupType, GeneratedHash, UserInfo } from './auth.type';
import { ApolloError } from 'apollo-server-core';
import { ERROR_CODE } from '../constants';
import { pbkdf2, randomBytes } from "crypto";
import * as _ from 'lodash';

const getSecureUser = (user: User) => {
  return _.omit(user, ["hash", "salt"]);
}


@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,
    private readonly jwtService: JwtService) {

  }

  private async passwordToHash(password: string, salt?: string): Promise<GeneratedHash> {
    if (!salt) {
      salt = randomBytes(32).toString("hex");
    }
    const hash = <string>await new Promise((resolve, reject) => {
      pbkdf2(password, salt, 100000, 64, "sha512", (err, deriveKey) => {
        if (err) return reject(err);
        return resolve(deriveKey.toString("hex"));
      })
    });
    return {
      hash,
      salt
    }
  }

  private async validatePassword(user: User, password: string) {
    const hash = (await this.passwordToHash(password, user.salt)).hash;


    return user.hash === hash;
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const user = await this.prisma.client.user({
        email: email
      });
      if (! await this.validatePassword(user, password)) {
        throw new ApolloError("비밀번호가 유효하지 않습니다.", ERROR_CODE.INVALID);
      }

      return this.jwtService.signAsync(getSecureUser(user));
    }
    catch (err) {
      return err;
    }
  }


  async singup(userInput: UserSignupType): Promise<string> {
    try {
      const user = await this.prisma.client.user({
        email: userInput.email
      })

      if (user) throw new ApolloError("이미 존재하는 이메일 입니다.", ERROR_CODE.DUPLICATE);

      const generatedHash = await this.passwordToHash(userInput.password);
      const data = {
        ...userInput,
        ...generatedHash
      };
      const createdUser = await this.prisma.client.createUser(
        {
          ..._.omit(data, ['password']),
          ...generatedHash
        }
      );

      return this.jwtService.signAsync(getSecureUser(createdUser));
    } catch (err) {
      return err;
    }
  }

  async validate({ id }): Promise<User> {
    const user = await this.prisma.client.user({ id });
    if (!user) {
      throw Error("Authenticate validation error");
    }

    return user;
  }
}
