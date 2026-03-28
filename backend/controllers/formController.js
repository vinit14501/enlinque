import nodemailer from "nodemailer"
import { ContactForm } from "../models/ContactForm.js"
import { PlanForm } from "../models/PlanForm.js"
import { contactFormTemplate, planFormTemplate } from "./emailTemplates.js"

// Lazy-initialized module-level singleton with connection pooling.
// Cannot be created at module evaluation time because ES module imports are
// hoisted — process.env vars from dotenv are not yet populated when this
// module is first evaluated. The singleton is created on first request call,
// at which point dotenv.config() has already run in server.js.
let transporter = null

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      pool: true,
      maxConnections: 3,
      maxMessages: 100,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  }
  return transporter
}

export const submitContactForm = async (req, res, next) => {
  let savedForm = null

  try {
    const { name, company, email, phone, message } = req.body
    const submittedAt = new Date()

    const contactForm = new ContactForm({
      name,
      company,
      email,
      phone,
      message,
      submittedAt,
    })

    savedForm = await contactForm.save()

    const mailer = getTransporter()

    await mailer.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      html: contactFormTemplate({ name, company, email, phone, message, submittedAt }),
    })

    await mailer.sendMail({
      from: `"Enlinque" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000048;">Thank you for contacting us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Best regards,<br>Enlinque Team</p>
        </div>
      `,
    })

    res.status(200).json({
      success: true,
      message: "Message sent and stored successfully",
      formId: savedForm._id,
    })
  } catch (error) {
    console.error("Contact form error:", error.message)

    if (savedForm) {
      // Expected degraded state: form reached the database but the email step
      // failed. Return success so the user is not asked to re-submit.
      res.status(200).json({
        success: true,
        message:
          "Your message was stored successfully, but email notification failed. We will contact you soon.",
        formId: savedForm._id,
        emailError: true,
      })
    } else {
      // Unexpected failure (DB unreachable, schema violation, etc.).
      // Delegate to the global error handler — it logs server-side and sends
      // a generic message to the client with no internal details exposed.
      next(error)
    }
  }
}

export const submitPlanForm = async (req, res, next) => {
  let savedForm = null

  try {
    const { name, email, phone, selectedPlan } = req.body
    const submittedAt = new Date()

    const planForm = new PlanForm({
      name,
      email,
      phone,
      selectedPlan,
      submittedAt,
    })

    savedForm = await planForm.save()

    const mailer = getTransporter()

    await mailer.sendMail({
      from: `"Plan Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Plan Selection",
      html: planFormTemplate({ name, email, phone, selectedPlan, submittedAt }),
    })

    await mailer.sendMail({
      from: `"Enlinque" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for your interest!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000048;">Thank you for choosing our services!</h2>
          <p>Dear ${name},</p>
          <p>We have received your request for the ${selectedPlan.name} plan.</p>
          <p>Our team will contact you shortly to complete the setup process.</p>
          <p>Best regards,<br>Enlinque Team</p>
        </div>
      `,
    })

    res.status(200).json({
      success: true,
      message: "Plan selection submitted successfully",
      formId: savedForm._id,
    })
  } catch (error) {
    console.error("Plan form error:", error.message)

    if (savedForm) {
      // Expected degraded state: form saved, email failed.
      res.status(200).json({
        success: true,
        message:
          "Your plan selection was stored successfully, but email notification failed. We will contact you soon.",
        formId: savedForm._id,
        emailError: true,
      })
    } else {
      // Unexpected failure — delegate to global error handler.
      next(error)
    }
  }
}
