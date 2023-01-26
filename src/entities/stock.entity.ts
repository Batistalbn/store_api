import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Stock {
  @PrimaryGeneratedColumn("uuid")
  readonly stock_id?: string;

  @Column()
  total: number;

  @Column({ nullable: true })
  min_stock: number;

  @OneToOne((type) => Product, { eager: true })
  @JoinColumn()
  product_id: Product["product_id"];
}
