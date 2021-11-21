import { Args, Int, Query, Resolver, Mutation, ID } from '@nestjs/graphql';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileDto } from './dto/update-profile.dto';
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
  async createProfile(@Args('newProfile') newProfile: CreateProfileInput) {
    return this.profilesService.create(newProfile);
  }

  @Mutation(() => Profile)
  async updateProfile(
    @Args({ name: 'id', type: () => ID }) id: number,
    @Args('updateProfile') updateProfile: UpdateProfileDto,
  ) {
    return this.profilesService.update(id, updateProfile);
  }
}
