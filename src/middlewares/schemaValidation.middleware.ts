import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

export const schemaValidation =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const valid = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validData = valid;

      return next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
  };
