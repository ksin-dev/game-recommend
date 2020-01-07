import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { jwtConstants } from './auth.constants';
const cookieExtractor = (req: Request): string | null => {
  let token = null;
  if (req && req.headers) {
    token = req.headers.authorization;
  }
  return token;
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