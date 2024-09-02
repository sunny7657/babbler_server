import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const { PORT = 3001, DATABASE_URL } = process.env;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

console.log(process.env);

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Database connection successful"))
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
