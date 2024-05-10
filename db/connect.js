import { MongoClient } from "mongodb";

const connectDB = (uri) => {
  return new MongoClient(uri);
};

export default connectDB;
