import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { OrderService } from '../services';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { CreateNewOrder } from '../models/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() response) {
    const orders = await this.orderService.findAll();
    return response.status(HttpStatus.OK).json(orders);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById(@Res() response: Response, @Param('id') id) {
    const ordersUser = await this.orderService.findByUserId(id);
    return response.status(HttpStatus.OK).json(ordersUser);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Res() response: Response,
    @Body() createNewOrder: CreateNewOrder,
  ) {
    const order = await this.orderService.createOrder(createNewOrder);
    return response.status(HttpStatus.CREATED).json(order);
  }
}
