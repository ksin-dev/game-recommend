import { AuthResolver } from './auth.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })],
  providers: [AuthService, AuthResolver],
  exports: [AuthResolver]
})
export class AuthModule { }