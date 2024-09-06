import User from "../models/UserModel";

export const signup = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = User.create({ email, password });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
