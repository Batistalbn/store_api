import { compare } from "bcrypt";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Address } from "./address.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly user_id?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  cpf: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

  comparePwd = async (pwdString: string): Promise<boolean> => {
    return await compare(pwdString, this.password);
  };

  @ManyToOne(() => Address, (address) => address.residents, {
    eager: true,
  })
  address: Address;
}
