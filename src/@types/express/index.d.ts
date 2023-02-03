import { Address, Category, User } from "../../entities";

declare global {
  namespace Express {
    interface Request {
      validData: User | Address | Category;
      validUser: Partial<User>;
      validAddress: Address;
      validCategory: Category;
      address: Partial<Address>;
      category: Category;
      user: User;
      decoded: User;
    }
  }
}
