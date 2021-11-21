import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  @Query(() => [Item])
  async items(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Query(() => Item)
  async item(@Args('id', { type: () => ID }) id: number): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Mutation(() => Item)
  async createItem(@Args('name') name: string): Promise<Item> {
    return this.itemsService.create(name);
  }
}
