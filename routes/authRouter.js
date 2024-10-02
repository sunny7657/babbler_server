import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send(res.json);
});

export default authRouter;
