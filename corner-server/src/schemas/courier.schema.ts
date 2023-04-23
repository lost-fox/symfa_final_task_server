import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourierDocument = Courier & Document;

@Schema()
export class Courier {
  @Prop()
  fullName: string;

  @Prop()
  image: string;

  @Prop()
  isFree: boolean;
}

export const CourierSchema = SchemaFactory.createForClass(Courier);
