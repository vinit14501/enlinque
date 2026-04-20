"use server";

import connectDB from "@/lib/db";
import { getTransporter } from "@/lib/email";
import {
  planFormTemplate,
  planAcknowledgmentTemplate,
} from "@/lib/email-templates";
import { checkRateLimit } from "@/lib/rate-limit";
import { planFormSchema } from "@/lib/validation";
import { PlanForm } from "@/models/PlanForm";

interface ActionResult {
  success: boolean;
  message: string;
  formId?: string;
  emailError?: boolean;
}

export async function submitPlanForm(
  formData: Record<string, unknown>,
): Promise<ActionResult> {
  // Rate limiting
  const rateCheck = await checkRateLimit();
  if (!rateCheck.allowed) {
    return { success: false, message: rateCheck.message! };
  }

  // Validation
  const parsed = planFormSchema.safeParse(formData);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message || "Validation failed";
    return { success: false, message: firstError };
  }

  const { name, email, phone, selectedPlan } = parsed.data;
  const submittedAt = new Date();

  let savedForm = null;

  try {
    await connectDB();

    const planForm = new PlanForm({
      name,
      email,
      phone,
      selectedPlan,
      submittedAt,
    });

    savedForm = await planForm.save();

    const mailer = getTransporter();

    await mailer.sendMail({
      from: `"Plan Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Plan Selection",
      html: planFormTemplate({
        name,
        email,
        phone,
        selectedPlan,
        submittedAt,
      }),
    });

    await mailer.sendMail({
      from: `"Enlinque" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for your interest!",
      html: planAcknowledgmentTemplate(name, selectedPlan.name),
    });

    return {
      success: true,
      message: "Plan selection submitted successfully",
      formId: savedForm._id.toString(),
    };
  } catch (error) {
    console.error(
      "Plan form error:",
      error instanceof Error ? error.message : "Unknown error",
    );

    if (savedForm) {
      return {
        success: true,
        message:
          "Your plan selection was stored successfully, but email notification failed. We will contact you soon.",
        formId: savedForm._id.toString(),
        emailError: true,
      };
    }

    return {
      success: false,
      message: "Failed to submit. Please try again later.",
    };
  }
}
