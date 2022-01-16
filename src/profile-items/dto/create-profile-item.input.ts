import { IsInt, IsString } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProfileItemInput {
  @Field()
  @IsString()
  content: string;

  @Field(() => Int)
  @IsInt()
  itemId: number;
}
