import mongoose from "mongoose";

const uri =
  "mongodb+srv://akshaykumar:akshay2023@cluster0.kgwxi9x.mongodb.net/adobeTaskify";

export const connectToDb = async () => {
  await mongoose.connect(uri);
};
