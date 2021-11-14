import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Post()
  createProfile(@Body() body: CreateProfileDto) {
    return this.profileService.create(body);
  }
}
