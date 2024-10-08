import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Volunteer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column('simple-array', { nullable: true })
  images: string[];

  @Column({ default: false })
  accommodation: boolean;

  @Column({ default: false })
  medicine: boolean;

  @Column({ default: false })
  responsibleForTemporaryCare: boolean;
}
