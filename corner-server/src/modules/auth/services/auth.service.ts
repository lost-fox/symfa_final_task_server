import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../models/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signIn(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const userData = await this.userModel.findOne({ email: email });

    if (!userData) {
      throw new BadRequestException({ error: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password, userData.password);

    if (!isMatch) {
      throw new BadRequestException({
        error: 'Data errors. Please check the correctness of data',
      });
    }

    const payload = { userName: userData.username, sub: userData.id };
    return {
      status: HttpStatus.CREATED,
      message: 'Login successfully',
      access_token: this.jwtService.sign(payload),
    };
  }
}
