import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from "src/entitices/user.entities";// แก้ไขจาก entitices เป็น entities
import { CreateUserDTO, UpdateUserDTO } from "src/pet.dto";
import { validate } from "class-validator";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, 
  ) {}

  getStatus(): string {
    return "OK";
  }

  findAll(): Promise<User[]> {
    
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | null> { 
    const user = await this.userRepository.findOne({ where: { id } });
  
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    return user;
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    // ตรวจสอบว่าผู้ใช้มีอยู่แล้วหรือไม่
    const existingUser = await this.userRepository.findOne({
      where: [{ username: createUserDTO.username }, { email: createUserDTO.email }],
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    // Perform validation
    const errors = await validate(createUserDTO);
    if (errors.length > 0) {
      const errorMessage = errors.map((error) => Object.values(error.constraints).join(', ')).join(', ');
      console.error('Validation failed:', errors);
      throw new BadRequestException(errorMessage);
    }

    // Validate password and phone format
    if (!isValidPassword(createUserDTO.password) || !isValidPhone(createUserDTO.phone)) {
      throw new BadRequestException('Invalid password or phone format');
    }

    console.log('Validation successful');
    const user = this.userRepository.create(createUserDTO);
    return await this.userRepository.save(user);
  }

  async update(id: number, updateUserDTO: UpdateUserDTO): Promise<User> {
    const userToUpdate = await this.userRepository.findOne({ where: { id } });
    
    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }
    
    // Update fields
    Object.assign(userToUpdate, updateUserDTO);
    return await this.userRepository.save(userToUpdate);
  }

  async deleteById(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
  }
}

// Function to validate password format
function isValidPassword(password: string): boolean {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
  return passwordRegex.test(password);
}

// Function to validate phone format
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
