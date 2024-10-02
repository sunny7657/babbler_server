import { genSalt } from "bcrypt";
import mongoose from "mongoose";
import { emailRegex } from "../constants/user-constants";
import { handleSaveError, setUpdateSetting } from "./hooks";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "This field is required"],
    },
    email: {
      type: String,
      match: emailRegex,
      unique: true,
      required: [true, "This field is required"],
    },
    password: {
      type: String,
      required: [true, "This field is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", setUpdateSetting);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
