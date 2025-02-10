const rateLimit = require('express-rate-limit');

const createRateLimiter = (windowMs, max) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false
  });
};

module.exports = {
  formSubmissionLimiter: createRateLimiter(15 * 60 * 1000, 5) // 5 submissions per 15 minutes
};