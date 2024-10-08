import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn,ManyToOne} from "typeorm";
import User from 'src/entitices/user.entities';



@Entity()
export default class Pet  {
  @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    age : number;

    @Column()
    type : string;

    @ManyToOne(() => User, (user)=>user.pets)
    owner : User;

    @Column()
    health : string
}