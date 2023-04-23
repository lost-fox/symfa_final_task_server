import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MealDocument = Meal & Document;

@Schema()
export class Meal {
  @Prop()
  name: string;

  @Prop()
  subtitle: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  type: string;

  @Prop()
  price: number;

  @Prop()
  timeCook: number;

  @Prop()
  rating: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
