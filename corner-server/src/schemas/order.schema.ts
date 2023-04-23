import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  userId: string;

  @Prop()
  total: number;

  @Prop()
  meals: {
    name: string;
    price: number;
    count: number;
  }[];

  @Prop()
  courier: {
    id: string;
    name: string;
    image: string;
  }[];

  @Prop()
  deliveryTime: number;

  @Prop()
  start: Date;

  @Prop()
  finish: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
