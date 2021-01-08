import { expressLoader } from "./express-loader";
import { mongooseLoader } from "./mongoose-loader";

export const loaders = async (app) => {
  await mongooseLoader();
  await expressLoader(app);
};
