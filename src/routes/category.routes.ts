import { Router } from "express";
import categoryController from "../controllers/category/category.controller";
import { schemaValidation, validateToken, verifyIsAdmin } from "../middlewares";
import { checkCategoryExists, idCategoryVerify } from "../middlewares/category";
import { categorySchema } from "../schemas/category";

const routes = Router();

export const categoryRoutes = () => {
  routes.post(
    "",
    schemaValidation(categorySchema),
    validateToken,
    verifyIsAdmin,
    checkCategoryExists,
    categoryController.createCategory
  );

  routes.get("", categoryController.getAllCategory);

  routes.patch(
    "/:category_id",
    schemaValidation(categorySchema),
    validateToken,
    verifyIsAdmin,
    idCategoryVerify,
    categoryController.updateCategory
  );

  routes.delete(
    "/:category_id",
    validateToken,
    idCategoryVerify,
    categoryController.deleteCategory
  );

  return routes;
};
