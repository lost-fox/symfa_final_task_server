import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/schemas/order.schema';
import { CreateNewOrder } from '../models/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  async findByUserId(id): Promise<Order[]> {
    return await this.orderModel.find({ userId: id }).exec();
  }

  async createOrder(createNewOrder: CreateNewOrder) {
    return await this.orderModel.create(createNewOrder);
  }

  //   async findActiveOrder() {
  //    const today = new Date().toISOString();
  //   }
}
