import { Request, Response, NextFunction } from "express";

/**
 * Middleware to log details of incoming requests.
 * Logs the current timestamp, HTTP method, request URL, and IP address of the client.
 *
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function in the Express stack.
 */
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const now = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip;

  console.log(`[${now}] ${method} ${url} - ${ip}`);

  next();
};

export default loggerMiddleware;
