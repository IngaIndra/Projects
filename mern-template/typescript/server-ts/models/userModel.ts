import mongoose, { Schema } from "mongoose";

export interface UserInterface {
  _id: string;
  name: string;
  email: string;
  passowrd: string;
}

const UserSchema = new Schema<UserInterface>({});

const UserModel = mongoose.model<UserInterface>("User", UserSchema);

export default UserModel;
