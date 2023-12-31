import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user_sector' })
export class UserSector extends BaseEntity {
  @Column()
  name: string;

  @Column()
  sectors: string;
}
