import { Test, TestingModule } from '@nestjs/testing';
import { ProfileItemsResolver } from './profile-items.resolver';

describe('ProfileItemsResolver', () => {
  let resolver: ProfileItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileItemsResolver],
    }).compile();

    resolver = module.get<ProfileItemsResolver>(ProfileItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
