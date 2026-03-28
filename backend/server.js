import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import helmet from "helmet"
import mongoSanitize from "express-mongo-sanitize"
import compression from "compression"
import connectDB from "./config/db.js"
import formRoutes from "./routes/formRoutes.js"
import { validateEnv } from "./utils/emailConfigChecker.js"

// Hard-fail at startup if any required environment variable is missing.
// This prevents the server from silently running in a broken state.
validateEnv()

const app = express()

// FRONTEND_URL is guaranteed set by validateEnv above — no wildcard fallback.
const frontendUrl = process.env.FRONTEND_URL.replace(/\/$/, "")

// CORS
app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

// Security headers.
// contentSecurityPolicy is intentionally disabled: this server is a pure JSON API.
// It never serves HTML, scripts, or styles, so CSP provides no security value here.
// CSP belongs on the frontend, enforced via Nginx response headers.
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
)

// Body parser
app.use(express.json({ limit: "10kb" }))
app.use(express.urlencoded({ extended: true, limit: "10kb" }))

// Data sanitization against NoSQL query injection
app.use(mongoSanitize())

// Compression
app.use(compression())

// Connect to MongoDB
connectDB()

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Enlinque API",
  })
})

// API routes
app.use("/api/forms", formRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

// Global error handler — receives errors passed via next(err) from controllers.
// Never sends internal error details (messages, stack traces) to clients.
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.name, err.message)

  // Mongoose schema validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed. Please check your input and try again.",
      errors: Object.values(err.errors).map((e) => e.message),
    })
  }

  // MongoDB duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "A submission with these details already exists.",
    })
  }

  res.status(err.status || 500).json({
    success: false,
    message: "An unexpected error occurred. Please try again later.",
  })
})

// Start server
const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
})

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! Shutting down...")
  console.error(err.name, err.message)
  server.close(() => {
    process.exit(1)
  })
})

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! Shutting down...")
  console.error(err.name, err.message)
  process.exit(1)
})
