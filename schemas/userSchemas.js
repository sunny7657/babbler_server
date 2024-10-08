import Joi from "joi";

import { emailRegex } from "../constants/user-constants";

export const userSignupSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

export const userSigninSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});
