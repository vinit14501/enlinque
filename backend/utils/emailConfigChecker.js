// Validates all required environment variables at server startup.
// Calls process.exit(1) if any are missing so the server never starts in a broken state.
export const validateEnv = () => {
  const required = [
    "MONGO_URI",
    "EMAIL_USER",
    "EMAIL_PASS",
    "RECIPIENT_EMAIL",
    "FRONTEND_URL",
  ]

  const missing = required.filter((k) => !process.env[k])

  if (missing.length > 0) {
    console.error(
      `Server startup failed — missing required environment variables: ${missing.join(", ")}`
    )
    process.exit(1)
  }
}
