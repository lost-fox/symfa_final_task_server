import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal, MealDocument } from 'src/schemas/meal.schema';

@Injectable()
export class MealService {
  constructor(@InjectModel(Meal.name) private mealModel: Model<MealDocument>) {}

  async findAll(): Promise<Meal[]> {
    return await this.mealModel.find().exec();
  }

  async findById(id): Promise<Meal> {
    return await this.mealModel.findById(id).exec();
  }
}
