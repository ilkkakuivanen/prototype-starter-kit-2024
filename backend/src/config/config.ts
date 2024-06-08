import dotenv from "dotenv";

dotenv.config();

if (process.env.SECRET === undefined) {
  throw new Error("No secret set in .env.");
}

const config = {
  httpPort: 3000,
  httpsPort: 3443,
  isAuthOn: true,
  isProduction: process.env.NODE_ENV === "production",
  dbUri: process.env.DB_URI,
  secretKey: process.env.SECRET ?? "",
};

export { config };
