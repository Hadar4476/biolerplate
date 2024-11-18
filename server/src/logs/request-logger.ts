import { Request, Response, NextFunction } from "express";

import logger from "./logger";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  // logger.info({
  //   method: req.method,
  //   url: req.url,
  //   headers: req.headers,
  //   body: req.body,
  // });
  next();
};

export default requestLogger;
