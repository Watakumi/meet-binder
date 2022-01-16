import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';

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
  ) {}

  async findAll(profileId: number) {
    const profile = await this.profileRepository.findOne(profileId, {
      relations: ['profile-items'],
    });

    return profile.profileItems;
  }

  async create(
    createProfileItemInput: CreateProfileItemInput,
  ): Promise<ProfileItem> {
    const profileItem = this.profileItemRepository.create({
      content: createProfileItemInput.content,
    });

    return this.profileItemRepository.save(profileItem);
  }
}
