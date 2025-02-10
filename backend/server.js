require("dotenv").config()
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")
const compression = require("compression")
const connectDB = require("./config/db")
const formRoutes = require("./routes/formRoutes")

const app = express()

// Connect to MongoDB
connectDB()

// Security Middleware
app.use(helmet()) // Secure HTTP headers
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Restrict to your frontend domain
    methods: ["POST"], // Only allow POST requests
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)
app.use(express.json({ limit: "10kb" })) // Body parser with size limit
app.use(mongoSanitize()) // Prevent NoSQL injection
app.use(xss()) // Prevent XSS attacks
app.use(compression()) // Compress responses

// Routes
app.use("/api/forms", formRoutes)

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    error: "Something went wrong!",
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
