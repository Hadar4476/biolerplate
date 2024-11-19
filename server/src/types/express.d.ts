// Extend Request interface to include userId

declare namespace Express {
  interface Request {
    userId?: string;
  }
}
