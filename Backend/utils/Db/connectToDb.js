import mongoose from "mongoose";

export const connectToDb = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};
