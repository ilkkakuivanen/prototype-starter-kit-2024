import express from "express";
import bodyParser from "body-parser";
import type { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/userRoutes.js";
import loggerMiddleware from "./middleware/loggerMiddleWare.js";
import loginRoutes from "./routes/loginRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { ERR_500 } from "./config/responses.js";

const server = express();

// Middleware to parse incoming request bodies as JSON
server.use(bodyParser.json());

// Middleware to log details of incoming requests
server.use(loggerMiddleware);

// Routes for login
server.use("/api/login", loginRoutes);

// Routes for user-related actions, protected by authentication middleware
server.use("/api/users", authMiddleware, userRoutes);

/**
 * Error-handling middleware to catch and log errors.
 * Sends a 500 status response with a generic error message.
 *
 * @param {Error} err - The error object.
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function in the Express stack.
 */
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(ERR_500.ERROR_OCCURRED);
});

export default server;
