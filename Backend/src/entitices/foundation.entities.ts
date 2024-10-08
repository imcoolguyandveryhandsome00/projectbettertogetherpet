import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Foundation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ default: false })
  isFoodShortage: boolean;

  @Column({ default: false })
  isFundShortage: boolean;
}
