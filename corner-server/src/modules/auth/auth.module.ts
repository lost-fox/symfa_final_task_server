import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { AUTH_SERVICES } from './services';
import { AUTH_CONTROLLERS } from './controllers';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from 'src/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.expiresIn },
    }),
  ],
  controllers: AUTH_CONTROLLERS,
  providers: AUTH_SERVICES,
})
export class AuthModule {}
