import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileItem } from './entities/profile-item.entity';

@Module({ imports: [TypeOrmModule.forFeature([ProfileItem])] })
export class ProfileItemsModule {}
