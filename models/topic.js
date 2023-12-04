import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    alternatPhone: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.models.user || mongoose.model("user", Schema);
