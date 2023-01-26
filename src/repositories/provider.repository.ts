import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Provider } from "../entities";
import { IProviderRepo } from "../interfaces/provider";

class ProviderRepository implements IProviderRepo {
  private repo: Repository<Provider>;
  constructor() {
    this.repo = AppDataSource.getRepository(Provider);
  }

  save = async (provider: Provider) => await this.repo.save(provider);

  getAll = async () => await this.repo.find();

  getOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Provider>) => {
    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new ProviderRepository();
