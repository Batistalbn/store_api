import { Express } from "express";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  // registrar rotas
  app.use("/api", userRoutes());
};
