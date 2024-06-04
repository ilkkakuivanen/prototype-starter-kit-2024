import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const SECRET_KEY = "your_secret_key"; // Replace with your actual secret key

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (config.isAuthOn) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      res.status(401).json({ message: "Authorization header missing" });
      return;
    }

    const token = authHeader.split(" ")[1]; // Assuming Bearer token

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json({ message: "Forbidden" });
        return;
      }
      (req as any).user = user; // TypeScript workaround to add user property to request object
      next();
    });
  } else {
    next();
  }
}
