import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

type TokenResult = jwt.JwtPayload | string | null;

interface TokenValidationResult {
  user: jwt.JwtPayload | string | null;
  isValidToken: boolean;
}

/**
 * Verifies a JWT token and retrieves the user information embedded in it.
 * If no secret is passed, the default secret key is used.
 *
 * @param {string} token - The JWT token to be verified.
 * @param {string} [secret=SECRET_KEY] - The secret key to verify the token. Defaults to SECRET_KEY.
 * @returns {Promise<TokenValidationResult>} A promise that resolves to an object containing the user information and a boolean indicating whether the token is valid.
 */
async function getUserFromToken(
  token: string,
  secret = config.secretKey
): Promise<TokenValidationResult> {
  try {
    const result: TokenResult = await new Promise((resolve) => {
      jwt.verify(token, secret, (err, user) => {
        if (err) {
          resolve(null);
        } else {
          resolve(user as TokenResult);
        }
      });
    });

    return { user: result, isValidToken: result ? true : false };
  } catch (error) {
    return { user: null, isValidToken: false };
  }
}

export default getUserFromToken;
