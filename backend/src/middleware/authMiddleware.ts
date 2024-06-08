import { Request, Response, NextFunction } from "express";
import type jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import getUserFromToken from "../utils/verifyToken.js";
import { ERR_401, ERR_403 } from "../config/responses.js";

interface AuthenticatedRequest extends Request {
  user?: jwt.JwtPayload | string | null;
}

/**
 * Middleware to authenticate requests using a JWT token.
 * If authentication is enabled in the configuration, it verifies the token
 * and attaches the user information to the request object.
 *
 * @param {AuthenticatedRequest} req - The incoming request object, extended to optionally include user information.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function in the Express stack.
 * @returns {Promise<void>} A promise that resolves to void.
 */
export async function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (config.isAuthOn) {
    const authHeader = req.headers["authorization"];

    /** Check if the authorization header is present */
    if (!authHeader) {
      res.status(401).json({ message: ERR_401.HEADER_MISSING });
      return;
    }

    /** Check if the authorization header is in the correct format */
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      res.status(401).json({
        message: ERR_401.INVALID_FORMAT,
      });
      return;
    }

    /** Extract the token from the authorization header */
    const token = parts[1];
    const tokenValidationResult = await getUserFromToken(token);

    /** If the token is valid, attach the user information to the request object and proceed to the next middleware */
    if (tokenValidationResult.isValidToken) {
      req.user = tokenValidationResult.user;
      next();
    } else {
      res.status(403).json({ message: ERR_403.FORBIDDEN });
      return;
    }
  } else {
    next(); // Proceed to the next middleware if authentication is toggled off
  }
}
