import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../items/entities/item.entity';
import { Profile } from '../profiles/entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileItemInput } from './dto/create-profile-item.input';
import { ProfileItem } from './entities/profile-item.entity';

@Injectable()
export class ProfileItemsService {
  constructor(
    @InjectRepository(ProfileItem)
    private profileItemRepository: Repository<ProfileItem>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async findAll(profileId: number) {
    const profile = await this.profileRepository.findOne(profileId, {
      relations: ['profileItems'],
    });
    if (!profile) {
      throw new NotFoundException(`Profile #${profileId} is Not found.`);
    }

    return profile.profileItems;
  }

  async create(
    profileId: number,
    createProfileItemInput: CreateProfileItemInput,
  ): Promise<ProfileItem> {
    const profile = await this.profileRepository.findOne(profileId);

    if (!profile) {
      throw new NotFoundException(`Profile #${profileId} is Not found.`);
    }
    const item = await this.itemRepository.findOne(
      createProfileItemInput.itemId,
    );
    if (!item) {
      throw new NotFoundException(`Item #${profileId} is Not found.`);
    }
    const profileItem = this.profileItemRepository.create({
      content: createProfileItemInput.content,
      profile: profile,
      item: item,
    });

    return this.profileItemRepository.save(profileItem);
  }
}
