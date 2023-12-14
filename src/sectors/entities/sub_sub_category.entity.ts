import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Subcategory } from './sub_category.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class SubSubcategory extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.subSubcategories)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;
}
