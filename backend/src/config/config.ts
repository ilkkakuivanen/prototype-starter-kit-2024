import dotenv from "dotenv";

dotenv.config();

const config = {
  httpPort: 3000,
  httpsPort: 3443,
  isAuthOn: true,
  isProduction: process.env.NODE_ENV === "production",
  dbUri: process.env.DB_URI,
};

export { config };
