import { DeleteResult, UpdateResult } from "typeorm";
import { Provider } from "../../entities";

export interface IProviderRepo {
  save: (provider: Provider) => Promise<Provider>;
  getAll: () => Promise<Provider[]>;
  getOne: (payload: object) => Promise<Provider | null>;
  update: (id: string, payload: object) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
