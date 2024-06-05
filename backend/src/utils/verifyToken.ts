import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key"; // Replace with your actual secret key

type TokenResult = jwt.JwtPayload | string | null;

interface TokenValidationResult {
  user: jwt.JwtPayload | string | null;
  isValidToken: boolean;
}

async function getUserFromToken(token: string): Promise<TokenValidationResult> {
  try {
    const result: TokenResult = await new Promise((resolve) => {
      jwt.verify(token, SECRET_KEY, (err, user) => {
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
