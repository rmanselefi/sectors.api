import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class UserSector extends BaseEntity {
  @Column()
  name: string;

  @Column()
  sectors: string;
}
