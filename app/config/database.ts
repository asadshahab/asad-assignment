import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI!);
    console.log("MongoDB connected");
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
