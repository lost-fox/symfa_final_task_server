import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CouponService } from '../services';
import { Response } from 'express';
import { FindOneCouponDto } from '../models/find-one-coupon.dto';

@Controller('coupons')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Get()
  async findAll(@Res() response) {
    const coupons = await this.couponService.findAll();
    return response.status(HttpStatus.OK).json(coupons);
  }

  @Post()
  async findOne(
    @Res() response: Response,
    @Body() findOneCouponDto: FindOneCouponDto,
  ) {
    const coupon = await this.couponService.findOne(findOneCouponDto);
    return response.status(HttpStatus.OK).json(coupon);
  }
}
