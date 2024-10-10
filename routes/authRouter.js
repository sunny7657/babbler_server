import express from "express";
import validateBody from "../decorators/validateBody";
import { userSignupSchema } from "../schemas/userSchemas";
import AuthControllers from "../controllers/authControllers";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send(res.json);
});

authRouter.post(
  "/signup",
  validateBody(userSignupSchema),
  AuthControllers.signup
);

export default authRouter;
