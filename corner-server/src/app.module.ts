import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { MealModule } from './modules/meal/meal.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { CourierModule } from './modules/courier/courier.module';
import { Order, OrderSchema } from './schemas/order.schema';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/corner', {
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MealModule,
    UserModule,
    OrderModule,
    AuthModule,
    CouponModule,
    CourierModule,
  ],
})
export class AppModule {}
