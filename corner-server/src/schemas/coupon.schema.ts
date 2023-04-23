import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CouponDocument = Coupon & Document;

@Schema()
export class Coupon {
  @Prop()
  value: string;

  @Prop()
  discount: string;

  @Prop()
  start: string;

  @Prop()
  end: string;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
