import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsNumber, IsNumberString, Length, Matches, IsAlphanumeric, IsArray, IsDateString, IsBoolean,IsOptional, IsInt } from "class-validator";

export class CreatePetDTO {
  @IsNotEmpty()
  name :string;

  @IsNotEmpty()
  age : number;

  @IsNotEmpty()
  type : string;

  @IsNotEmpty()
  ownerId : number;

  @IsNotEmpty()
  health : string;

}

export class UpdatePetDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number; // ID ของสัตว์เลี้ยงที่ต้องการอัปเดต

  @IsOptional()
  @IsString()
  name?: string; // ชื่อสัตว์เลี้ยง

  @IsOptional()
  @IsString()
  description?: string; // คำอธิบายเพิ่มเติม
}

export class CreateUserDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number; // ID ของผู้ใช้

  @IsNotEmpty()
  @IsString()
  username: string; // ชื่อผู้ใช้

  @IsNotEmpty()
  @IsString()
  password: string; // รหัสผ่าน

  @IsNotEmpty()
  @IsString()
  address: string; // ที่อยู่ของผู้ใช้

  @IsNotEmpty()
  @IsString()
  first_name: string; // ชื่อจริง

  @IsNotEmpty()
  @IsString()
  last_name: string; // นามสกุล

  @IsNotEmpty()
  @IsString()
  email: string; // อีเมล

  @IsNotEmpty()
  @IsDateString()
  birthdate: string; // วันเกิด

  @IsNotEmpty()
  @IsString()
  age: string; // อายุ

  @IsNotEmpty()
  @IsString()
  phone: string; // หมายเลขโทรศัพท์

  @IsNotEmpty()
  @IsNumber()
  identification_number: number; // หมายเลขประจำตัวประชาชน

  @IsNotEmpty()
  @IsNumber()
  laser_code: number; // รหัสเลเซอร์

  @IsNotEmpty()
  @IsString()
  bank: string; // ชื่อธนาคาร

  @IsNotEmpty()
  @IsNumber()
  bank_branch: number; // รหัสสาขา

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  roles: string[]; // บทบาทของผู้ใช้

  @IsNotEmpty()
  @IsBoolean()
  is_admin: boolean; // สถานะผู้ดูแลระบบ
}

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number; // ID ของผู้ใช้ที่ต้องการอัปเดต

  @IsOptional()
  @IsString()
  username?: string; // ชื่อผู้ใช้

  @IsOptional()
  @IsString()
  password?: string; // รหัสผ่าน

  @IsOptional()
  @IsString()
  address?: string; // ที่อยู่

  @IsOptional()
  @IsString()
  first_name?: string; // ชื่อจริง

  @IsOptional()
  @IsString()
  last_name?: string; // นามสกุล

  @IsOptional()
  @IsString()
  email?: string; // อีเมล

  @IsOptional()
  @IsDateString()
  birthdate?: string; // วันเกิด

  @IsOptional()
  @IsString()
  age?: string; // อายุ

  @IsOptional()
  @IsNumberString()
  @Length(13, 13, { message: 'Identification number must be exactly 13 digits.' })
  identification_number?: string; // หมายเลขประจำตัวประชาชน

  @IsOptional()
  @IsString()
  laser_code?: string; // รหัสเลเซอร์

  @IsOptional()
  @IsString()
  bank?: string; // ชื่อธนาคาร

  @IsOptional()
  @IsString()
  bank_branch?: string; // รหัสสาขา

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  roles?: string[]; // บทบาทของผู้ใช้
}

export class CreateAdminDTO {
  @IsNotEmpty()
  @IsAlphanumeric()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/, { message: 'Password must contain at least one digit, one lowercase, and one uppercase letter.' })
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
  password: string; // รหัสผ่าน

  @IsNotEmpty()
  @IsNumberString()
  @Length(10, 10, { message: 'Phone number must be exactly 10 digits.' })
  phone: string; // หมายเลขโทรศัพท์

  @IsNotEmpty()
  username: string; // ชื่อผู้ดูแลระบบ

  @IsNotEmpty()
  email: string; // อีเมล

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  roles: string[]; // บทบาทของผู้ดูแลระบบ
}

export class UpdateAdminDTO {
  @IsNotEmpty()
  @IsAlphanumeric()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/, { message: 'Password must contain at least one digit, one lowercase, and one uppercase letter.' })
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
  password: string; // รหัสผ่าน

  @IsNotEmpty()
  @IsNumberString()
  @Length(10, 10, { message: 'Phone number must be exactly 10 digits.' })
  phone: string; // หมายเลขโทรศัพท์

  @IsNotEmpty()
  username: string; // ชื่อผู้ดูแลระบบ

  @IsNotEmpty()
  email: string; // อีเมล

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  roles: string[]; // บทบาทของผู้ดูแลระบบ
}

export class CreateSendNotification {
  @IsNotEmpty()
  @IsString()
  title: string; // หัวข้อการแจ้งเตือน
}

export class CreateSendNotificationDto {
  @IsNotEmpty()
  @IsString()
  user: string; // ผู้ที่ได้รับการแจ้งเตือน
}

// volunteer.dto.ts
export class CreateVolunteerDto {
  @IsString()
  @IsNotEmpty()
  title: string; // หัวข้อการอาสาสมัคร

  @IsString()
  @IsNotEmpty()
  content: string; // รายละเอียดการอาสาสมัคร

  @IsArray()
  @IsOptional()
  images?: string[]; // รูปภาพของอาสาสมัคร

  @IsNotEmpty()
  @IsBoolean()
  accommodation: boolean; // ความพร้อมในการให้ที่พัก

  @IsNotEmpty()
  @IsBoolean()
  medicine: boolean; // ความพร้อมในการให้การรักษา

  @IsNotEmpty()
  @IsBoolean()
  responsibleForTemporaryCare: boolean; // ความรับผิดชอบในการดูแลชั่วคราว
}

export class CreateFoundationDto {
  @IsString()
  @IsNotEmpty()
  name: string; // ชื่อมูลนิธิ

  @IsString()
  @IsNotEmpty()
  content: string; // เนื้อหาของมูลนิธิ

  @IsString()
  @IsOptional()
  imageUrl?: string; // URL ของภาพมูลนิธิ

  @IsNotEmpty()
  @IsBoolean()
  isFoodShortage: boolean; // สถานะการขาดแคลนอาหาร

  @IsNotEmpty()
  @IsBoolean()
  isFundShortage: boolean; // สถานะการขาดแคลนทุน
}

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  title: string; // หัวข้อข่าว

  @IsString()
  @IsNotEmpty()
  content: string; // เนื้อหาข่าว

  @IsString()
  @IsNotEmpty()
  image: string; // URL ของภาพข่าว
}

export class EditUserProfileDto {
  @IsOptional()
  @IsInt()
  userId?: number; // ID ของผู้ใช้

  @IsOptional()
  @IsString()
  username?: string; // ชื่อผู้ใช้

  @IsOptional()
  @IsString()
  imageProfile?: string; // URL ของภาพโปรไฟล์
}
