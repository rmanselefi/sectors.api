import { Controller, Post, Body, Get } from '@nestjs/common';
import { SectorsService } from '../services/sectors.service';
import { CreateSectorDto } from '../dto/create.dto';

@Controller('sectors')
export class SectorsController {
  constructor(private readonly sectorsService: SectorsService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateSectorDto) {
    return this.sectorsService.createUserSector(createUserDto);
  }

  // Get all User Sectors
  @Get('/all')
  async getAllUserSectors() {
    return this.sectorsService.getAllUserSectors();
  }
}
