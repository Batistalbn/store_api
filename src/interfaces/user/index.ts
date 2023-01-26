import { DeleteResult, UpdateResult } from "typeorm";
import { User } from "../../entities";

export interface IUserRepo {
  save: (user: User) => Promise<User>;
  getAll: () => Promise<User[]>;
  getOne: (payload: object) => Promise<User | null>;
  update: (id: string, payload: Partial<User>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

export interface IReturnUser {
  status: number;
  message: object;
}
