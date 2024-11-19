import mongoose from "mongoose";

import config from "./config";

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit with failure
  }
};

export default connectToDatabase;
