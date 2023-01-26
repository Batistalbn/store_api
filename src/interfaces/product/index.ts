import { DeleteResult, UpdateResult } from "typeorm";
import { Product } from "../../entities";

export interface IProductRepo {
  save: (product: Product) => Promise<Product>;
  getAll: () => Promise<Product[]>;
  getOne: (payload: object) => Promise<Product | null>;
  update: (id: string, payload: object) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
