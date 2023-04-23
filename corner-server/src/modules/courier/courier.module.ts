import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Courier, CourierSchema } from 'src/schemas/courier.schema';
import { COURIER_SERVICES } from './services';
import { COURIER_CONTROLLER } from './controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Courier.name, schema: CourierSchema }]),
  ],
  controllers: COURIER_CONTROLLER,
  providers: COURIER_SERVICES,
})
export class CourierModule {}
