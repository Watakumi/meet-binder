import { Args, Int, Query, Resolver, Mutation } from '@nestjs/graphql';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { ProfilesService } from './profiles.service';

@Resolver(() => Profile)
export class ProfilesResolver {
  constructor(private profilesService: ProfilesService) {}

  @Query(() => Profile)
  async profile(@Args('id', { type: () => Int }) id: number) {
    return this.profilesService.findOne(id);
  }

  @Mutation(() => Profile)
  async createProfile(@Args('newProfile') newProfile: CreateProfileDto) {
    return this.profilesService.create(newProfile);
  }
}
