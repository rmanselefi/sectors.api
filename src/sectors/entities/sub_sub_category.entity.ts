import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Subcategory } from './sub_category.entity';
import { BaseEntity } from './base.entity';

@Entity({ name: 'sub_subcategory', schema: 'verceldb' })
export class SubSubcategory extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.subSubcategories)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;
}
