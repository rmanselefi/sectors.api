import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { SubSubcategory } from './sub_sub_category.entity';
import { BaseEntity } from './base.entity';

@Entity({ name: 'subcategory', schema: 'verceldb' })
export class Subcategory extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.subcategories)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(
    () => SubSubcategory,
    (subSubcategory) => subSubcategory.subcategory,
  )
  subSubcategories: SubSubcategory[];
}
