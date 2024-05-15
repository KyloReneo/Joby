// Import express.js and create the express app
import express from "express";
const app = express();

// Read the configs from .env file
import dotenv from "dotenv";
dotenv.config();

// Make db connection
import connectToDB from "./db/connect.js";

// Routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// Middlewares
import notFoundMiddleware from "./middleware/NotFound.js";
import errorHandlerMiddleware from "./middleware/ErrorHandler.js";
import mongoose from "mongoose";

// Built-in express middleware for parsing json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("init");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    connectToDB();
    app.listen(port, () =>
      console.log(`server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
