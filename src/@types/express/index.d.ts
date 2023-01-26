import { Address, User } from "../../entities";

declare global {
  namespace Express {
    interface Request {
      validData: User | Address;
      address: Partial<Address>;
      validUser: Partial<User>;
      validAddress: Address;
      user: User;
      decoded: User;
    }
  }
}
