import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./category.entity";
import { Stock } from "./stock.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  readonly product_id?: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  img: string;

  @Column({ nullable: true, type: "text" })
  description: string;

  @Column({ type: "float" })
  cost_price: number;

  @Column({ type: "float" })
  sale_price: number;

  @Column({ default: true })
  active: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

  @OneToOne((type) => Stock)
  @JoinColumn()
  stock: Stock;

  @ManyToOne(() => Category, (category) => category.products, {
    eager: true,
  })
  category: Category;
}
