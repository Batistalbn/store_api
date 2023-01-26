import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Product } from "../entities";
import { IProductRepo } from "../interfaces/product";

class ProductRepository implements IProductRepo {
  private repo: Repository<Product>;
  constructor() {
    this.repo = AppDataSource.getRepository(Product);
  }

  save = async (product: Product) => await this.repo.save(product);

  getAll = async () => await this.repo.find();

  getOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Product>) => {
    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new ProductRepository();
