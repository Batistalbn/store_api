import { hash } from "bcrypt";
import { Request } from "express";
import { sign } from "jsonwebtoken";
import { AssertsShape } from "yup/lib/object";
import * as dotenv from "dotenv";
import { User } from "../../entities";
import { addressRepository, userRepository } from "../../repositories";
import { serializedUserSchema } from "../../schemas/user";
import { IReturnUser } from "../../interfaces/user";

dotenv.config();

class UserService {
  createUser = async ({
    validAddress,
    validUser,
    address,
  }: Request): Promise<AssertsShape<any>> => {
    if (address === null) {
      const newAddress = await addressRepository.save(validAddress);
    }

    const foundAddress = await addressRepository.getOne({
      street: validAddress.street,
      number: validAddress.number,
    });

    validUser.password = await hash(validUser.password, 10);

    validUser.address = foundAddress;

    const newUser = await userRepository.save(validUser as User);

    return await serializedUserSchema.validate(newUser, { stripUnknown: true });
  };

  loginUser = async ({ validData }: Request): Promise<IReturnUser> => {
    const user: User = await userRepository.getOne({
      email: (validData as User).email,
    });

    if (!user || !(await user.comparePwd((validData as User).password))) {
      return { status: 401, message: { message: "Invalid credentials" } };
    }

    const token: string = sign({ ...user }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return { status: 200, message: { token } };
  };

  getAll = async (): Promise<IReturnUser> => {
    const userList = await userRepository.getAll();
    const serializedUser = [];

    for (let i = 0; i < userList.length; i++) {
      serializedUser.push(
        await serializedUserSchema.validate(userList[i], { stripUnknown: true })
      );
    }

    return {
      status: 200,
      message: serializedUser,
    };
  };

  getOne = async ({ user }: Request): Promise<IReturnUser> => {
    return {
      status: 200,
      message: await serializedUserSchema.validate(user, {
        stripUnknown: true,
      }),
    };
  };

  update = async ({ user, validData }: Request): Promise<AssertsShape<any>> => {
    if ((validData as User).password) {
      (validData as User).password = await hash(
        (validData as User).password,
        10
      );
    }

    await userRepository.update(user.user_id, { ...(validData as User) });

    const { user_id } = user;
    const userUpdate = await userRepository.getOne({ user_id });

    return await serializedUserSchema.validate(userUpdate, {
      stripUnknown: true,
    });
  };

  delete = async ({ user }: Request) => {
    await userRepository.delete(user.user_id);
  };
}

export default new UserService();
