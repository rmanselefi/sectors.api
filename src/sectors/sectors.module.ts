import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectorsController } from './controllers/sectors.controller';
import { SectorsService } from './services/sectors.service';
import { Category } from './entities/category.entity';
import { UserSector } from './entities/user_sector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, UserSector])],
  controllers: [SectorsController],
  providers: [SectorsService],
})
export class SectorsModule {}
