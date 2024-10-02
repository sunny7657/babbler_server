import User from "../models/UserModel";

const signup = (req, res) => {
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

export default {
  signup,
};
