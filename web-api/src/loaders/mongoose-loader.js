/* eslint-disable no-console */

import { config } from "../config";
import mongoose from "mongoose";

export const mongooseLoader = async () => {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    mongoose.connection.close(false);
  }

  const mongooseCon = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  if (mongooseCon.connection.readyState !== 1) {
    console.log(`Mongo disconnected! databaseURL = ${config.databaseURL}`);
  } else {
    console.log("Mongo connected");
  }
};
