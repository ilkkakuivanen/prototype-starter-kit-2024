import express from "express";
import bodyParser from "body-parser";
import type { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/userRoutes.js";
import loggerMiddleware from "./middleware/loggerMiddleWare.js";

const server = express();

server.use(bodyParser.json());
server.use(loggerMiddleware);  // Use the logging middleware
server.use("/api/users", userRoutes);

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
export default server;
