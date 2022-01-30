import { Test, TestingModule } from '@nestjs/testing';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';

describe('ItemsResolver', () => {
  let resolver: ItemsResolver;
  const item = {
    id: 1,
    name: 'item',
    createdAt: '2022-01-01 12:00:00',
    updatedAt: '2022-01-01 12:00:00',
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsResolver,
        {
          provide: ItemsService,
          useValue: () => ({
            findAll: jest.fn(() => [item]),
            findOne: jest.fn(),
            create: jest.fn(),
          }),
        },
      ],
    }).compile();

    resolver = moduleRef.get<ItemsResolver>(ItemsResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  // describe('items', () => {
  //   // it('should return an array of items', async () => {
  //   //   const result = [];
  //   //   jest.spyOn(itemsService, 'findAll').mockImplementation(() => result);
  //   // });
  // });
});
