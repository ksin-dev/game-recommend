import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { jwtConstants } from './auth.constants';
const cookieExtractor = (req: Request): string | null => {
  let jwt = null;
  if (req && req.headers) {
    const arr = String(req.headers.authorization).split(" ");
    if (arr[0] === "Bearer" && arr.length === 2) {
      jwt = arr[1];
    }
  }

  return jwt;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET || jwtConstants.secret,
    });
  }

  validate(payload) {
    return this.authService.validate(payload);
  }
}