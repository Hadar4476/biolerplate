import { Request } from "express";

export interface ILogMessage {
  message: string;
  userId?: number;
  [key: string]: any;
}

export interface CommonRequest extends Request {
  user?: {
    id: string; // MongoDB ID or any identifier you prefer
  };
}
