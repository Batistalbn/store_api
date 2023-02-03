import { Express } from "express";
import { categoryRoutes } from "./category.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/api", userRoutes());
  app.use("/api/category", categoryRoutes());
};
