import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProfileItemInput } from './dto/create-profile-item.input';
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

  @Mutation(() => ProfileItem)
  async createProfileItem(
    @Args('profileId', { type: () => Int }) profileId: number,
    @Args('newProfileItem') createProfileItem: CreateProfileItemInput,
  ) {
    return this.profileItemsService.create(profileId, createProfileItem);
  }
}
