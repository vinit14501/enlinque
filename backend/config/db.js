import mongoose from "mongoose"
import dns from "dns"

// ROOT CAUSE: Node.js v24.13.0+ c-ares regression on Windows.
// c-ares changed the fallback DNS resolver to report on port 53 instead of
// port 0. Node.js's detection logic expected port 0 for the loopback stub
// resolver — it now fails to identify it and tries to query a non-listening
// local resolver at 127.0.0.1:53, producing ECONNREFUSED on dns.resolveSrv().
//
// dns.setServers() overrides the resolver for ALL dns.resolve*() calls
// (confirmed: includes dns.resolveSrv() used by the MongoDB driver for
// mongodb+srv:// SRV record lookup). This is the only Node.js API that
// bypasses the broken system stub resolver entirely.
//
// Permanent fix: upgrade Node.js to v24.15.0+ (PR nodejs/node#61453).
dns.setServers(["1.1.1.1", "8.8.8.8", "8.8.4.4"])

const MAX_RETRIES = 5
const RETRY_DELAY_MS = 3000

const connectDB = async (attempt = 1) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    })
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error(
      `MongoDB connection error (attempt ${attempt}/${MAX_RETRIES}):`,
      error.message
    )

    if (attempt < MAX_RETRIES) {
      const delay = RETRY_DELAY_MS * attempt
      console.log(`Retrying in ${delay / 1000}s...`)
      await new Promise((resolve) => setTimeout(resolve, delay))
      return connectDB(attempt + 1)
    }

    console.error("Max retries reached. Shutting down.")
    process.exit(1)
  }
}

export default connectDB
