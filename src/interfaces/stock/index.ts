import { DeleteResult, UpdateResult } from "typeorm";
import { Stock } from "../../entities";

export interface IStockRepo {
  save: (stock: Stock) => Promise<Stock>;
  getAll: () => Promise<Stock[]>;
  getOne: (payload: object) => Promise<Stock | null>;
  update: (id: string, payload: object) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
