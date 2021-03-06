import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../items/entities/item.entity';
import { Profile } from '../profiles/entities/profile.entity';
import { ProfileItem } from './entities/profile-item.entity';
import { ProfileItemsResolver } from './profile-items.resolver';
import { ProfileItemsService } from './profile-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileItem, Profile, Item])],
  providers: [ProfileItemsResolver, ProfileItemsService],
})
export class ProfileItemsModule {}
