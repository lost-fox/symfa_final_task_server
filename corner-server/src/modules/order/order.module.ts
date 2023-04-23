import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schemas/order.schema';
import { ORDER_SERVICES } from './services';
import { ORDER_CONTROLLER } from './controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: ORDER_CONTROLLER,
  providers: ORDER_SERVICES,
})
export class OrderModule {}
