import { genSalt } from "bcrypt";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "This field is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "This field is required"],
  },
  userName: {
    type: String,
    required: [true, "This field is required"],
  },
});

UserSchema.pre("save", async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});

const User = mongoose.model("Users", userSchema);

export default User;
