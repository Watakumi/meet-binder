import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.profileService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateProfileInput) {
    return this.profileService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateProfileInput) {
    return this.profileService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} profile`;
  }
}
