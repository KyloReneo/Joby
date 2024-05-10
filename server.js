//Import express.js and create the express app
import express from "express";
const app = express();

//Read the configs from .env file
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
const MongoUsername = encodeURIComponent(process.env.MONGO_USERNAME);
const MongoPassword = encodeURIComponent(process.env.MONGO_PASSWORD);
const MongoUri = `mongodb+srv://${MongoUsername}:${MongoPassword}@cluster0.mcbnsw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//Middlewares
import notFoundMiddleware from "./middleware/NotFound.js";
import errorHandlerMiddleware from "./middleware/ErrorHandler.js";

app.get("/", (req, res) => {
  res.send("init");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    connectDB(MongoUri);
    app.listen(port, () =>
      console.log(`server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
