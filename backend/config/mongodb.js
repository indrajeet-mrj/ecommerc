import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce`);
};

export default connectDB;
