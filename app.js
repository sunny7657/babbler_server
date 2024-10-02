import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import mongoose from "mongoose";
// import morgan from "morgan";
import authRouter from "./routes/AuthRouter.js";

dotenv.config();

const app = express();

const { PORT = 3001, DATABASE_URL } = process.env;

app.use((req, res, next) => {
  console.log(req.method);
  res.json(req.method);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// app.use(morgan("tiny"));
// app.use(
//   cors({
//     origin: [process.env.ORIGIN],
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());

app.use("/api/auth", authRouter);

// mongoose
//   .connect(DATABASE_URL)
//   .then(() => console.log("Database connection successful"))
//   .catch((error) => {
//     console.error(error.message);
//     process.exit(1);
//   });
