import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/userlogin/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validatePassword(password: string, userPassword: string): Promise<boolean> {
  
    return password === userPassword; 
  }

  async login(usernameOrEmail: string, password: string) {
    const user = await this.userService.findOne(usernameOrEmail);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await this.validatePassword(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = await this.generateToken({ id: user.id, username: user.username, email: user.email });
    return { token };
  }

  async logout(user: any) {
    // อาจอัปเดตสถานะผู้ใช้ที่นี่
    console.log(`${user.username} has logged out.`);
  }

  async generateToken(user: { id: number; username: string; email: string }): Promise<string> {
    const payload = { sub: user.id, username: user.username, email: user.email };
    
    try {
      return await this.jwtService.signAsync(payload, { expiresIn: '60s' });
    } catch (error) {
      throw new UnauthorizedException('Failed to generate token');
    }
  }
}
