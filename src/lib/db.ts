import mongoose from "mongoose";
import dns from "dns";

// ROOT CAUSE: Node.js v24.13.0+ c-ares regression on Windows.
// c-ares changed the fallback DNS resolver to report on port 53 instead of
// port 0. This breaks mongodb+srv:// SRV record lookup.
// Permanent fix: upgrade Node.js to v24.15.0+ (PR nodejs/node#61453).
dns.setServers(["1.1.1.1", "8.8.8.8", "8.8.4.4"]);

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 3000;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Prevent multiple connections in development (HMR creates new module instances)
const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
};

const cached: MongooseCache = globalWithMongoose.mongoose ?? {
  conn: null,
  promise: null,
};

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = cached;
}

async function connectWithRetry(attempt = 1): Promise<typeof mongoose> {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB connected successfully");
    return conn;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown connection error";
    console.error(
      `MongoDB connection error (attempt ${attempt}/${MAX_RETRIES}):`,
      message,
    );

    if (attempt < MAX_RETRIES) {
      const delay = RETRY_DELAY_MS * attempt;
      console.log(`Retrying in ${delay / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return connectWithRetry(attempt + 1);
    }

    throw new Error(
      `Failed to connect to MongoDB after ${MAX_RETRIES} attempts`,
    );
  }
}

export default async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = connectWithRetry();
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
