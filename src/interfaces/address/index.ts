import { DeleteResult, UpdateResult } from "typeorm";
import { Address } from "../../entities";

export interface IAddressRepo {
  save: (address: Address) => Promise<Address>;
  getAll: () => Promise<Address[]>;
  getOne: (payload: object) => Promise<Address | null>;
  update: (id: string, payload: object) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
