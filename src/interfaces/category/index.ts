import { DeleteResult, UpdateResult } from "typeorm";
import { Category } from "../../entities";

export interface ICategoryRepo {
  save: (category: Category) => Promise<Category>;
  getAll: () => Promise<Category[]>;
  getOne: (payload: object) => Promise<Category | null>;
  update: (id: string, payload: object) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

export interface IReturnCategory {
  status: number;
  message: object;
}
