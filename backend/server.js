const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const compression = require("compression")
const connectDB = require("./config/db")
const formRoutes = require("./routes/formRoutes")

const app = express()

// Connect to MongoDB
connectDB()

// Security Middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
      },
    },
    xssFilter: true,
  })
)
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)
app.use(express.json({ limit: "10kb" }))
app.use(mongoSanitize())
app.use(compression())

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
