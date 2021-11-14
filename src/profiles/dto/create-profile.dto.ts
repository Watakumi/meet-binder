import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  githubUrl: string;

  @IsString()
  twitterId: string;

  @IsString()
  description: string;
}
