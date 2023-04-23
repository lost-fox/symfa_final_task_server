import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { USER_CONTROLLER } from './controllers';
import { USER_SERVICES } from './services';
import { Meal, MealSchema } from 'src/schemas/meal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }]),
  ],
  controllers: USER_CONTROLLER,
  providers: USER_SERVICES,
})
export class UserModule {}
