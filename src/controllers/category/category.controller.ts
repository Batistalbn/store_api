import { Request, Response } from "express";
import categoryService from "../../services/category/category.service";

class CategoryController {
  createCategory = async (req: Request, res: Response) => {
    const { status, message } = await categoryService.create(req);
    return res.status(status).json(message);
  };

  getAllCategory = async (_: Request, res: Response) => {
    const { status, message } = await categoryService.getAll();
    return res.status(status).json(message);
  };

  updateCategory = async (req: Request, res: Response) => {
    const { status, message } = await categoryService.update(req);
    return res.status(status).json(message);
  };

  deleteCategory = async (req: Request, res: Response) => {
    await categoryService.delete(req);
    return res.status(200).json({ message: "Deleted category" });
  };
}

export default new CategoryController();
