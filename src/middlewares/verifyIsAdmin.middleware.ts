import { NextFunction, Request, Response } from "express";

export const verifyIsAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.decoded.isAdmin !== true) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  return next();
};
