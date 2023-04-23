import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Courier, CourierDocument } from 'src/schemas/courier.schema';

@Injectable()
export class CourierService {
  constructor(
    @InjectModel(Courier.name) private courierModel: Model<CourierDocument>,
  ) {}

  async findAll(): Promise<Courier[]> {
    return await this.courierModel.find().exec();
  }

  async findById(id): Promise<Courier> {
    return await this.courierModel.findById(id).exec();
  }
}
