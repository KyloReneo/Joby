import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectToDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Successfully Connected to DB...");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectToDB;
