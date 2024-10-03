import * as authServices from "../services/authServices";

import ctrlWrapper from "../decorators/ctrlWrapper";

import httpError from "../helpers/HttpError";

const signup = async (req, res) => {
  const { email } = req.body;
  const user = await authServices.findUser({ email });

  if (user) {
    throw httpError(409, "Email is already in use");
  }

  const newUser = await authServices.signup(req.body);

  res.status(201).json({
    username: newUser.username,
    email: newUser.email,
  });
};

export default {
  signup: ctrlWrapper(signup),
};
