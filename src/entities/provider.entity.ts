import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Provider {
  @PrimaryGeneratedColumn("uuid")
  readonly provider_id?: string;

  @Column({ unique: true })
  company: string;

  @Column()
  representative: string;

  @Column()
  contact: string;

  @Column()
  email: string;

  @ManyToMany((type) => Product, { eager: true })
  @JoinTable()
  products: Product[];
}
