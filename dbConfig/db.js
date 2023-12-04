import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mk3638432:tLYIRlboRuPtid6D@crud.avie7oj.mongodb.net/curd"
    );
    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
