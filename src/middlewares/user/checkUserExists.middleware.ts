import { NextFunction, Request, Response } from "express";
import { User } from "../../entities";
import { userRepository } from "../../repositories";

export const checkUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { validData } = req;

  const user = {
    email: (validData as User).email,
    password: (validData as User).password,
    firstName: (validData as User).firstName,
    lastName: (validData as User).lastName,
    cpf: (validData as User).cpf,
    isAdmin: (validData as User).isAdmin,
  };

  const foundEmail: User = await userRepository.getOne({
    email: user.email,
  });

  if (foundEmail) {
    return res.status(409).json({ message: "Email already registered" });
  }

  req.validUser = user;

  return next();
};
