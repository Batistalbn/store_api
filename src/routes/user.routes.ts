import { Router } from "express";
import userController from "../controllers/user/user.controller";
import { schemaValidation, validateToken, verifyIsAdmin } from "../middlewares";
import { checkAddressExists } from "../middlewares/address";
import { checkUserExists, idVerifyUser } from "../middlewares/user";
import {
  createUserSchema,
  loginSchema,
  updateUserSchema,
} from "../schemas/user";

const routes = Router();

export const userRoutes = () => {
  routes.post(
    "/register",
    schemaValidation(createUserSchema),
    checkUserExists,
    checkAddressExists,
    userController.createUser
  );

  routes.post(
    "/login",
    schemaValidation(loginSchema),
    userController.loginUser
  );

  routes.get(
    "/users",
    validateToken,
    verifyIsAdmin,
    userController.getAllUsers
  );

  routes.get("/profile", validateToken, idVerifyUser, userController.getOne);

  routes.patch(
    "/profile/update",
    schemaValidation(updateUserSchema),
    validateToken,
    idVerifyUser,
    userController.update
  );

  routes.delete(
    "/profile/delete",
    validateToken,
    idVerifyUser,
    userController.delete
  );

  return routes;
};
