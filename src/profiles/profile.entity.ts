import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  githubUrl: string;

  @Column({ length: 100 })
  twitterId: string;

  @Column('text')
  description: string;
}
