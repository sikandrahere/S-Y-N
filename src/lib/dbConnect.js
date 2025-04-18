import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  try {
    if (cached.conn) {
      return cached.conn; 
    }

    if (!cached.promise) {
      const options = {
        bufferCommands: false,
      };

      cached.promise = await mongoose.connect(MONGODB_URI, options).then((mongoose) => {
        console.log("MongoDB connected successfully");
        return mongoose;

      });
    }

    cached.conn = await cached.promise; 
    return cached.conn;

  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default dbConnect;