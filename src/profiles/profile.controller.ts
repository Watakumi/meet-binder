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
  create(@Body() body: CreateProfileDto) {
    return this.profileService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateProfileDto) {
    return `This action updates #${id} profile with ${body.description}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} profile`;
  }
}
