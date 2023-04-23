import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coupon, CouponDocument } from 'src/schemas/coupon.schema';
import { FindOneCouponDto } from '../models/find-one-coupon.dto';

@Injectable()
export class CouponService {
  constructor(
    @InjectModel(Coupon.name) private couponModel: Model<CouponDocument>,
  ) {}

  async findAll(): Promise<Coupon[]> {
    return await this.couponModel.find().exec();
  }

  async findOne(findOneCouponDto: FindOneCouponDto) {
    const { value } = findOneCouponDto;
    const couponData = await this.couponModel.findOne({ value: value });

    if (!couponData) {
      throw new BadRequestException({ error: "Coupon don't exist" });
    }

    const today = new Date().toISOString();
    const firstDate = new Date(couponData.start).toISOString();
    const finishDate = new Date(couponData.end).toISOString();

    console.log();

    if (firstDate < today && finishDate > today) {
      return couponData;
    } else {
      throw new BadRequestException({ error: "'Coupon not active'" });
    }
  }
}
