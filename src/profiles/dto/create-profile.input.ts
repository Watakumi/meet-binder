import { IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field()
  @IsString()
  githubUrl: string;

  @Field()
  @IsString()
  twitterId: string;

  @Field()
  @IsString()
  description: string;
}
