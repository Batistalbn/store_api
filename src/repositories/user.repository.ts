import { hashSync } from "bcrypt";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { IUserRepo } from "../interfaces/user";

class UserRepository implements IUserRepo {
  private repo: Repository<User>;
  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  save = async (user: User) => await this.repo.save(user);

  getAll = async () => await this.repo.find();

  getOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<User>) => {
    if (payload.password) {
      payload.password = hashSync(payload.password, 10);
    }

    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new UserRepository();
