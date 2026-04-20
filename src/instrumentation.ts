export async function register() {
  const required = ["MONGO_URI", "EMAIL_USER", "EMAIL_PASS", "RECIPIENT_EMAIL"];
  const missing = required.filter((k) => !process.env[k]);

  if (missing.length > 0) {
    throw new Error(
      `Server startup failed — missing required environment variables: ${missing.join(", ")}`,
    );
  }
}
