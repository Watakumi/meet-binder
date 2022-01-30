import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesResolver } from './profiles.resolver';
import { ProfilesService } from './profiles.service';

describe('ProfilesResolver', () => {
  let resolver: ProfilesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfilesResolver,
        {
          provide: ProfilesService,
          useValue: () => ({
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
          }),
        },
      ],
    }).compile();

    resolver = module.get<ProfilesResolver>(ProfilesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
