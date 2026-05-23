"use server";

import connectDB from "@/lib/db";
import { getTransporter } from "@/lib/email";
import {
  contactFormTemplate,
  contactAcknowledgmentTemplate,
} from "@/lib/email-templates";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validation";
import { ContactForm } from "@/models/ContactForm";

interface ActionResult {
  success: boolean;
  message: string;
  emailError?: boolean;
}

export async function submitContactForm(
  formData: Record<string, unknown>,
): Promise<ActionResult> {
  // Rate limiting
  const rateCheck = await checkRateLimit();
  if (!rateCheck.allowed) {
    return { success: false, message: rateCheck.message! };
  }

  // Validation
  const parsed = contactFormSchema.safeParse(formData);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message || "Validation failed";
    return { success: false, message: firstError };
  }

  const { name, company, email, phone, message } = parsed.data;
  const submittedAt = new Date();

  let savedForm = null;

  try {
    await connectDB();

    const contactForm = new ContactForm({
      name,
      company,
      email,
      phone,
      message,
      submittedAt,
    });

    savedForm = await contactForm.save();

    const mailer = getTransporter();

    await mailer.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      html: contactFormTemplate({
        name,
        company,
        email,
        phone,
        message,
        submittedAt,
      }),
    });

    await mailer.sendMail({
      from: `"Enlinque" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: contactAcknowledgmentTemplate(name),
    });

    return {
      success: true,
      message: "Message sent and stored successfully",
    };
  } catch (error) {
    console.error(
      "Contact form error:",
      error instanceof Error ? error.message : "Unknown error",
    );

    if (savedForm) {
      return {
        success: true,
        message:
          "Your message was stored successfully, but email notification failed. We will contact you soon.",
        emailError: true,
      };
    }

    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
