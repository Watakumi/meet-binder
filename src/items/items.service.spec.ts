import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProfileItem } from '../profile-items/entities/profile-item.entity';
import { Connection } from 'typeorm';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        { provide: Connection, useValue: {} },
        { provide: getRepositoryToken(Item), useValue: {} },
        { provide: getRepositoryToken(ProfileItem), useValue: {} },
        { provide: getRepositoryToken(Item), useValue: {} },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
