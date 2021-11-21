import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/graphql';
import { CreateProfileInput } from './create-profile.input';

@InputType()
export class UpdateProfileDto extends PartialType(CreateProfileInput) {}
