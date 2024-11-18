import { Request, Response, NextFunction } from "express";
import AppError from "../error";
import logger from "../logs/logger";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  logger.error("An error occurred", { error: err });
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export default errorHandler;
