import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import AppError from "../error";

export const validate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new AppError("Validation failed", 400);
  }

  next();
};
