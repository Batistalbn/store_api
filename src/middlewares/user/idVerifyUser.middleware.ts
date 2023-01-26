import { NextFunction, Request, Response } from "express";
import { userRepository } from "../../repositories";

export const idVerifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.decoded;

  const user = await userRepository.getOne({ user_id });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  req.user = user;

  return next();
};
