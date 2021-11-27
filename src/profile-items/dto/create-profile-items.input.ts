import { IsInt, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProfileItemsInput {
  @Field()
  @IsString()
  content: string;

  @Field()
  @IsInt()
  itemId: number;
}
