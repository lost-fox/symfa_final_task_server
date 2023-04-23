import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { MealService } from '../services';

@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Get()
  async findAll(@Res() response) {
    const meals = await this.mealService.findAll();
    return response.status(HttpStatus.OK).json(meals);
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const meal = await this.mealService.findById(id);
    return response.status(HttpStatus.OK).json(meal);
  }
}
