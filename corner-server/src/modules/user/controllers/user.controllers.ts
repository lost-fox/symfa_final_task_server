import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../services';
import { Request, Response } from 'express';
import { UpdateUserDto } from '../models/update-user.dto';
import { UpdateFavoriteDto } from '../models/update-favorite.dto';
import { CreateUserDto } from '../models/create-user.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() response) {
    const users = await this.userService.findAll();
    return response.status(HttpStatus.OK).json(users);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById(@Res() response: Response, @Param('id') id) {
    const user = await this.userService.findById(id);
    return response.status(HttpStatus.OK).json(user);
  }

  @Post()
  async create(
    @Res() response: Response,
    @Body() createUserDto: CreateUserDto,
  ) {
    const user = await this.userService.create(createUserDto);
    return response.status(HttpStatus.CREATED).json(user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Res() response: Response,
    @Req() request: Request,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const updateUser = await this.userService.update(
      request.params.id,
      updateUserDto,
    );
    return response.status(HttpStatus.OK).json(updateUser);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id/favorite')
  async getFavoriteMeal(@Res() response: Response, @Req() request: Request) {
    const meals = await this.userService.getFavoriteMeal(request.params.id);
    return response.status(HttpStatus.OK).json(meals);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id/favorite')
  async favoriteMeal(
    @Res() response: Response,
    @Req() request: Request,
    @Body() updateFavoriteDto: UpdateFavoriteDto,
  ) {
    const updateFavoriteMeal = await this.userService.favoriteMeal(
      request.params.id,
      updateFavoriteDto,
    );

    return response.status(HttpStatus.OK).json(updateFavoriteMeal);
  }

  @Delete('/:id')
  async remove(@Res() response: Response, @Req() request: Request) {
    const deleteUser = await this.userService.remove(request.params.id);
    return response.status(HttpStatus.OK).json(deleteUser);
  }
}
