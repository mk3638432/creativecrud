import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
