import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfileController {
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
  create(@Body() body: CreateProfileDto) {
    return this.profileService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateProfileDto) {
    return this.profileService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} profile`;
  }
}
