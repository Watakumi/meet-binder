import { Test, TestingModule } from '@nestjs/testing';
import { ProfileItemsResolver } from './profile-items.resolver';
import { ProfileItemsService } from './profile-items.service';

describe('ProfileItemsResolver', () => {
  let resolver: ProfileItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileItemsResolver,
        {
          provide: ProfileItemsService,
          useValue: () => ({ findAll: jest.fn(), create: jest.fn() }),
        },
      ],
    }).compile();

    resolver = module.get<ProfileItemsResolver>(ProfileItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
