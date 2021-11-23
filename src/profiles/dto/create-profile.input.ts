import { IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field()
  @IsString()
  description: string;
}
