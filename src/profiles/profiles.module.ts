import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesService } from './profiles.service';
import { Profile } from './entities/profile.entity';
import { ProfilesController } from './profiles.controller';
import { ProfilesResolver } from './profiles.resolver';
import { DateScalar } from 'src/common/scalars/date.scalar';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [ProfilesController],
  providers: [ProfilesService, ProfilesResolver, DateScalar],
})
export class ProfilesModule {}
