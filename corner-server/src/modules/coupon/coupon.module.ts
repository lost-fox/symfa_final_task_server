import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coupon, CouponSchema } from 'src/schemas/coupon.schema';
import { COUPON_CONTROLLER } from './controller';
import { COUPON_SERVICES } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coupon.name, schema: CouponSchema }]),
  ],
  controllers: COUPON_CONTROLLER,
  providers: COUPON_SERVICES,
})
export class CouponModule {}
