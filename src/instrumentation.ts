export async function register() {
  const required = ["MONGO_URI", "EMAIL_USER", "EMAIL_PASS", "RECIPIENT_EMAIL"];
  const missing = required.filter((k) => !process.env[k]);

  if (missing.length > 0) {
    // Warn rather than crash — static pages (Terms, Privacy, About, etc.)
    // must remain accessible regardless of contact-form env configuration.
    // Server actions validate these variables at call time and fail gracefully.
    console.warn(
      `[Enlinque] Missing environment variables: ${missing.join(", ")}. ` +
        "Contact form and email features will be unavailable until these are set.",
    );
  }
}
