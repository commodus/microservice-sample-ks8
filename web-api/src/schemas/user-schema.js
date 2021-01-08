import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  score: Number,
  password: String,
  age: Number,
});

export const UserModel = mongoose.model("user", UserSchema);
