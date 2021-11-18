import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Profile } from './entities/profile.entity';
import { ProfilesService } from './profiles.service';

@Resolver((of) => Profile)
export class ProfilesResolver {
  constructor(private profilesService: ProfilesService) {}

  @Query((returns) => Profile)
  async profile(@Args('id', { type: () => Int }) id: number) {
    return this.profilesService.findOne(id);
  }
}
