import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from 'src/schemas/user.schema';
import { UpdateUserDto } from '../models/update-user.dto';
import { CreateUserDto } from '../models/create-user.dto';
import { Meal, MealDocument } from 'src/schemas/meal.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    @InjectModel(Meal.name)
    private mealModel: Model<MealDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(id): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const { username, email, password } = createUserDto;

    const cheakEmail = await this.userModel.findOne({ email: email });

    if (cheakEmail) {
      throw new BadRequestException({ error: 'User with this e-mail exist' });
    }

    const passwordHashed = await bcrypt.hash(password, saltOrRounds);

    const userData = {
      username,
      email,
      password: passwordHashed,
      image: '',
      address: '',
      favoriteDish: [],
    };

    const newUser = new this.userModel(userData);

    newUser.save();
    return {
      status: HttpStatus.CREATED,
      message: `User ${username} added successfully`,
      result: {
        username,
        email,
      },
    };
  }

  async update(id, updateUserDto: UpdateUserDto) {
    const saltOrRounds = 10;
    const userData = await this.userModel.findById({ _id: id });

    if (!userData) {
      throw new BadRequestException({ error: 'User is not found' });
    }

    const { username, email, password, image, address } = updateUserDto;

    const passwordHashed = await bcrypt.hash(password, saltOrRounds);

    const updateUser = {
      username,
      email,
      password: passwordHashed,
      image,
      address,
    };

    await this.userModel.findByIdAndUpdate(userData.id, updateUser);

    return {
      status: HttpStatus.OK,
      message: `User ${updateUser.username} update successfully`,
      result: {
        username: updateUser.username,
        email: updateUser.email,
      },
    };
  }

  async favoriteMeal(id, mealId) {
    const user = await this.userModel.findById({ _id: id }).exec();

    if (!user) {
      throw new BadRequestException({ error: 'User is not found' });
    }

    const isFavorite = await this.userModel.find({
      _id: id,
      favoriteDish: mealId,
    });

    if (isFavorite.length) {
      await this.userModel.updateOne(
        { _id: id },
        { $pull: { favoriteDish: mealId } },
      );
    } else {
      await this.userModel.updateOne(
        { _id: id },
        { $push: { favoriteDish: mealId } },
      );
    }

    return {
      status: HttpStatus.OK,
      message: 'Favorite meals changed',
    };
  }

  async getFavoriteMeal(id) {
    const user = await this.userModel.findById({ _id: id }).exec();

    const meals = [];

    for (let i = 0; i < user.favoriteDish.length; i++) {
      meals.push(
        await this.mealModel.findById({ _id: user.favoriteDish[i].mealId }),
      );
    }

    return meals;
  }

  async remove(id) {
    const user = await this.userModel.deleteOne({ _id: id });

    if (!user) {
      throw new BadRequestException({ error: 'User not found' });
    }

    return {
      status: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
