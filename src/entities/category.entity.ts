import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  readonly category_id?: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products?: Product[];
}
