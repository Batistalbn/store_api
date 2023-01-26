import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address } from "../entities";
import { IAddressRepo } from "../interfaces/address";

class AddressRepository implements IAddressRepo {
  private repo: Repository<Address>;
  constructor() {
    this.repo = AppDataSource.getRepository(Address);
  }

  save = async (address: Address) => await this.repo.save(address);

  getAll = async () => await this.repo.find();

  getOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Address>) => {
    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new AddressRepository();
