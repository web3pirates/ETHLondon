import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  console.log(process.env.DB_PASSWORD);
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://ethlondon:${process.env.DB_PASSWORD}@cluster0.gwcd6sj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
