import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import * as dotenv from "dotenv";
import { User } from "../entities";

dotenv.config();

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  return verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.decoded = decoded as User;
    return next();
  });
};
