import { Router } from "express";
import { UserModel } from "../schemas/user-schema";

export const apiLoader = () => {
  const router = Router();
  /////////////////////////// register ///////////////////////////////
  router.put("/register", async (request, response) => {
    const user = new UserModel();
    user.name = request.body.name;
    user.age = request.body.age;
    user.score = request.body.score;
    user.password = request.body.password;

    if (!user.name || !user.age || !user.score || !user.password) {
      response
        .status(400)
        .json("All fields are required (name,age,score,password)");
      return;
    }

    await user.save();
    response.status(200).json("ok");
  });

  ////////////////////////////Login /////////////////////////////////////

  router.post("/login", async (request, response) => {
    const loginParam = {};
    loginParam.name = request.body.name;
    loginParam.password = request.body.password;

    if (!loginParam.name || !loginParam.password) {
      response.status(400).json("name & password are required !");
      return;
    }

    const user = await UserModel.findOne({
      name: loginParam.name,
      password: loginParam.password,
    })
      .lean(false)
      .exec();

    if (!user) {
      response.status(404).json("User could not find !");
      return;
    }

    response.json(user);
    return;
  });

  return router;
};
