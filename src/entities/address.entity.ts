import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly address_id?: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column({ default: "" })
  complement: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToMany(() => User, (user) => user.address)
  residents?: User[];
}
