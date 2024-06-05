import { Request, Response, NextFunction } from "express";
import type jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import getUserFromToken from "../utils/verifyToken.js";

const SECRET_KEY = "your_secret_key"; // Replace with your actual secret key

interface AuthenticatedRequest extends Request {
  user?: jwt.JwtPayload | string | null;
}

export async function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (config.isAuthOn) {
    const authHeader = req.headers["authorization"];

    /** Check header */
    if (!authHeader) {
      res.status(401).json({ message: "Authorization header missing" });
      return;
    }

    /** Check token format */
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      res.status(401).json({
        message: "Invalid authorization format. Expected 'Bearer <token>'",
      });
      return;
    }

    /** Check token contents */
    const token = parts[1];
    const tokenValidationResult = await getUserFromToken(token);

    /** Forward validation result */
    if (tokenValidationResult.isValidToken) {
      req.user = tokenValidationResult.user;
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
      return;
    }
  } else {
    next(); // Auth toggled off
  }
}
