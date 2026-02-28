import rateLimit from "express-rate-limit"

const createRateLimiter = (windowMs, max) => {
  return rateLimit({
    windowMs,
    limit: max,
    message: {
      error: "Too many requests from this IP, please try again later.",
    },
    standardHeaders: true,
    legacyHeaders: false,
  })
}

export const formSubmissionLimiter = createRateLimiter(15 * 60 * 1000, 5)
