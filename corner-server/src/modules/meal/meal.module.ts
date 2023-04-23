import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Meal, MealSchema } from 'src/schemas/meal.schema';
import { MEAL_SERVICES } from './services';
import { MEAL_CONTROLLER } from './controllers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }]),
  ],
  controllers: MEAL_CONTROLLER,
  providers: MEAL_SERVICES,
})
export class MealModule {}
