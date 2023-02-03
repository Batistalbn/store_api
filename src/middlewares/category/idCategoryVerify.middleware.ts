import { NextFunction, Request, Response } from "express";
import { categoryRepository } from "../../repositories";

export const idCategoryVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category_id } = req.params;
  const category = await categoryRepository.getOne({ category_id });

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  req.category = category;

  return next();
};
