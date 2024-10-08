import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetController } from './controller/pet.controller';
import { PetService } from './services/pet.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import User from './entitices/user.entities';
import Pet from './entitices/pet.entities';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './userlogin/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import Admin from './entitices/admin.entites';// ตรวจสอบให้แน่ใจว่า Admin เป็น entity
import { AdminController } from './controller/admin.controller';
import { AdminService } from './services/admin.service';
import { FoundationController } from './controller/foundation.controller';
import { FoundationService } from './services/foundation.service';
import { Foundation } from './entitices/foundation.entities';
import { NewsController } from './controller/new.controller';
import { NewsService } from './services/new.service';
import { News } from './entitices/new.entities';
import { VolunteerController } from './controller/volunteer.controller';
import { VolunteerService } from './services/volunteer.service';
import { Volunteer } from './entitices/volunteer.entities';
import { UserprofileService} from './services/userprofile.service';
import { UserprofileController } from './controller/userprofile.controller';
import { Userprofile } from './entitices/userprofile';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        let option: TypeOrmModuleOptions = {
          type: "sqlite",
          database: configService.get<string>("DATABASE_NAME", 'database.db'),
          entities: [User, Pet, Admin, Userprofile,Foundation,News,Volunteer],
          synchronize: true,
        };
        return option;
      },
      inject: [ConfigService],
    }),

    TypeOrmModule.forFeature([Pet, User, Admin,Userprofile,Foundation,News,Volunteer]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
  ],

  controllers: [AppController, PetController, UserController, AdminController,FoundationController,NewsController,VolunteerController,UserprofileController],
  providers: [
    AppService,
    PetService,
    UserService,
    AuthService,
    AdminService,
    FoundationService,
    NewsService,
    VolunteerService,
    UserprofileService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
