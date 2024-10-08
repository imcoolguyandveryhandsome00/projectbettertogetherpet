
import { Entity, Column,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import Pet from "./pet.entities";


@Entity()
export default class User  {

  @PrimaryGeneratedColumn()
    id : number;

    @Column()
    username : string;

    @Column()
    password : string;

    @Column({nullable:true})
    email :  string;

    @Column()
    address : string;

    @Column()
    first_name : string;

    @Column()
    last_name : string;

    @Column()
    phone : string;

    @Column()
    birthdate : Date;

    @Column()
    age : string;
    @Column()
    identification_number : Number;

    @Column()
    laser_code : Number;

    @Column()
    bank : string;

    @Column()
    bank_branch : Number;

    @Column({default : false})
    is_admin : boolean;

    @Column({ type: 'json', nullable: true })
    roles: string[];

    @OneToMany(()=>Pet,(pet)=>pet.owner)
    pets : []

}