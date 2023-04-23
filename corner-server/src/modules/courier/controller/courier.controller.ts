import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { CourierService } from '../services';

@Controller('couriers')
export class CourierController {
  constructor(private readonly courierService: CourierService) {}

  @Get()
  async findAll(@Res() response) {
    const couriers = await this.courierService.findAll();
    return response.status(HttpStatus.OK).json(couriers);
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const courier = await this.courierService.findById(id);
    return response.status(HttpStatus.OK).json(courier);
  }
}
