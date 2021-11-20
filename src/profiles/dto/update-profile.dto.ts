import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/graphql';
import { CreateProfileDto } from './create-profile.dto';

@InputType()
export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
