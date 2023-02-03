import { NextFunction, Request, Response } from "express";
import { Category } from "../../entities";
import { categoryRepository } from "../../repositories";

export const checkCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { validData } = req;

  const foundCategory = await categoryRepository.getOne({
    name: (validData as Category).name,
  });

  req.category = foundCategory;

  return next();
};
