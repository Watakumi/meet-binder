import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Item } from '../../items/entities/item.entity';
import { Profile } from '../../profiles/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class ProfileItem {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  content: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Profile, (profile) => profile.profileItems)
  profile: Profile;

  @ManyToOne(() => Item, (item) => item.profileItems)
  item: Item;
}
