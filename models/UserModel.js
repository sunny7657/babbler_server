import { genSalt } from "bcrypt";
import mongoose from "mongoose";
import { emailRegex } from "../constants/user-constants";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "This field is required"],
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, "This field is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "This field is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});

const User = mongoose.model("user", userSchema);

export default User;
