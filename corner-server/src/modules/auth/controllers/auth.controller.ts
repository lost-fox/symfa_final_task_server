import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from '../services';
import { Response } from 'express';
import { LoginDto } from '../models/login.dto';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async getToken(@Res() response: Response, @Body() loginDto: LoginDto) {
    const token = await this.authService.signIn(loginDto);
    return response.json(token);
  }
}
