import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'; import { PrismaService } from '../prisma/prisma.service';
import { UserSignupType, UserInfo } from './auth.type';
import { AuthService } from 'src/auth/auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Query('login')
  async login(@Args("email") email: string, @Args("password") password: string): Promise<UserInfo> {
    const jwt = await this.authService.login(email, password);

    return {
      jwt
    }
  }

  @Mutation("signup")
  async singup(@Args("signupInput") userInput: UserSignupType): Promise<UserInfo> {
    const jwt = await this.authService.singup(userInput);

    return {
      jwt
    }
  }


}