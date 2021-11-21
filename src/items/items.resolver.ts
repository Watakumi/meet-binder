import { Query, Resolver } from '@nestjs/graphql';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  @Query(() => [Item])
  async items(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
}
