import express from "express";
import { loaders } from "./loaders";

async function startServer() {
  const app = express();

  await loaders(app);

  app.listen(4001, () => {
    console.log(`Server started ${4001}`);
  });
}

startServer().catch((error) => console.error(error));
