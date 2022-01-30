import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Item } from '../items/entities/item.entity';
import { Profile } from '../profiles/entities/profile.entity';
import { Connection } from 'typeorm';
import { ProfileItem } from './entities/profile-item.entity';
import { ProfileItemsService } from './profile-items.service';

describe('ProfileItemsService', () => {
  let service: ProfileItemsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileItemsService,
        { provide: Connection, useValue: {} },
        { provide: getRepositoryToken(ProfileItem), useValue: {} },
        { provide: getRepositoryToken(Item), useValue: {} },
        { provide: getRepositoryToken(Profile), useValue: {} },
      ],
    }).compile();

    service = module.get<ProfileItemsService>(ProfileItemsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
