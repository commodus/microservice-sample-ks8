import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Could not find .env file");
}

export const config = {
  env: process.env.NODE_ENV,
  databaseURL: process.env.MONGODB_URI,
};
