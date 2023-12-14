import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { Injectable } from '@nestjs/common';
import { UserSector } from '../entities/user_sector.entity';

@Injectable()
export class SectorRepository {
  constructor(
    private readonly repository: Repository<Category>,
    private readonly userSectorRepository: Repository<UserSector>,
  ) {}
  async getCategories(): Promise<Category[]> {
    return await this.repository.find({
      relations: ['subcategories', 'subcategories.subSubcategories'],
    });
  }

  async save(userSector: UserSector): Promise<UserSector> {
    return await this.userSectorRepository.save(userSector);
  }
}
