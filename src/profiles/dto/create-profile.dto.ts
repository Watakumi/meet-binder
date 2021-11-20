import { IsString } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProfileDto {
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
