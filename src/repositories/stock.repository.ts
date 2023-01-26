import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Stock } from "../entities";
import { IStockRepo } from "../interfaces/stock";

class StockRepository implements IStockRepo {
  private repo: Repository<Stock>;
  constructor() {
    this.repo = AppDataSource.getRepository(Stock);
  }

  save = async (stock: Stock) => await this.repo.save(stock);

  getAll = async () => await this.repo.find();

  getOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Stock>) => {
    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new StockRepository();
