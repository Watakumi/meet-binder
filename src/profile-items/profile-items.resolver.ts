import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ProfileItem } from './entities/profile-item.entity';
import { ProfileItemsService } from './profile-items.service';

@Resolver()
export class ProfileItemsResolver {
  constructor(private readonly profileItemsService: ProfileItemsService) {}
  @Query(() => [ProfileItem])
  async profileItems(
    @Args('profileId', { type: () => Int }) profileId: number,
  ) {
    return this.profileItemsService.findAll(profileId);
  }
}
