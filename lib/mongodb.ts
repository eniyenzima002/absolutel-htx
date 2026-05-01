// lib/mongodb.ts
import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  // await mongoose.connect(process.env.MONGODB_URI!);

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
    
  }

}