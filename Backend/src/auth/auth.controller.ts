import { Controller, Get, Request, Post, Body, HttpStatus, HttpCode, UseGuards, Req, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/userlogin/users.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() credentials: { usernameOrEmail: string; password: string }) {
    const user = await this.userService.findOne(credentials.usernameOrEmail);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    
    if (!await this.authService.validatePassword(credentials.password, user.password)) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    

    // หากเข้าสู่ระบบสำเร็จ สร้าง token
    const accessToken = await this.authService.generateToken(user);
    return { access_token: accessToken };
  }

  @Post('logout')
  async logout(@Req() req) {
    // ตรวจสอบว่าผู้ใช้ได้เข้าสู่ระบบหรือไม่
    if (!req.user) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    await this.authService.logout(req.user);
    return { message: 'Logout successfully' };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
