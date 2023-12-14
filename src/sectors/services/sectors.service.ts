import { Injectable } from '@nestjs/common';

import { Category } from '../entities/category.entity';
import { CreateSectorDto } from '../dto/create.dto';
import { UserSector } from '../entities/user_sector.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SectorsService {
  constructor(
    @InjectRepository(Category)
    private sectorRepository: Repository<Category>,

    @InjectRepository(UserSector)
    private userSectorRepository: Repository<UserSector>,
  ) {}

  // Create User Sector with name
  async createUserSector(
    createSectorDto: CreateSectorDto,
  ): Promise<UserSector> {
    const { name, sectors } = createSectorDto;

    const mappedSector: UserSector = {
      name,
      sectors,
    };

    const user = await this.userSectorRepository.save(mappedSector);

    return user;
  }

  // Get all User Sectors
  async getAllUserSectors(): Promise<Category[]> {
    const sectors = await this.sectorRepository.find({
      relations: ['subcategories', 'subcategories.subSubcategories'],
    });

    return sectors;
  }
}
