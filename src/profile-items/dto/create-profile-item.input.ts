import { IsInt, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProfileItemInput {
  @Field()
  @IsString()
  content: string;

  @Field()
  @IsInt()
  itemId: number;
}
