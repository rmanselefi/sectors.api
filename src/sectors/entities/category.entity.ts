import { Entity, Column, OneToMany } from 'typeorm';
import { Subcategory } from './sub_category.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Category extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  subcategories: Subcategory[];
}
