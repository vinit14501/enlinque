const nodemailer = require("nodemailer")
const ContactForm = require("../models/ContactForm")
const PlanForm = require("../models/PlanForm")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const formController = {
  submitContactForm: async (req, res) => {
    try {
      const { name, company, email, phone, message } = req.body

      // Save to database
      const contactForm = new ContactForm({
        name,
        company,
        email,
        phone,
        message,
      })
      await contactForm.save()

      // Send email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: "🔔 New Contact Form Submission",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000048;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: white; padding: 15px; border-radius: 5px;">${message}</p>
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      }

      await transporter.sendMail(mailOptions)

      // Send confirmation to user
      const userConfirmation = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "We received your message",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000048;">Thank you for contacting us!</h2>
            <p>We have received your message and will get back to you shortly.</p>
            <p>Best regards,<br>Your Team</p>
          </div>
        `,
      }

      await transporter.sendMail(userConfirmation)

      res.status(200).json({
        success: true,
        message: "Message sent successfully",
      })
    } catch (error) {
      console.error("Contact form error:", error)
      res.status(500).json({
        success: false,
        message: "Failed to send message",
      })
    }
  },

  submitPlanForm: async (req, res) => {
    try {
      const { name, email, phone, selectedPlan } = req.body

      // Save to database
      const planForm = new PlanForm({
        name,
        email,
        phone,
        selectedPlan,
      })
      await planForm.save()

      // Send email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: "🎯 New Plan Selection",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000048;">New Plan Selection</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <div style="background-color: #e6f0ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <h3 style="color: #000048; margin-top: 0;">Selected Plan</h3>
                <p><strong>Plan Name:</strong> ${selectedPlan.name}</p>
                <p><strong>Price:</strong> $${selectedPlan.price}/month</p>
              </div>
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      }

      await transporter.sendMail(mailOptions)

      // Send confirmation to user
      const userConfirmation = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for your interest!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000048;">Thank you for choosing our services!</h2>
            <p>We have received your request for the ${selectedPlan.name} plan.</p>
            <p>Our team will contact you shortly to complete the setup process.</p>
            <p>Best regards,<br>Your Team</p>
          </div>
        `,
      }

      await transporter.sendMail(userConfirmation)

      res.status(200).json({
        success: true,
        message: "Plan selection submitted successfully",
      })
    } catch (error) {
      console.error("Plan selection error:", error)
      res.status(500).json({
        success: false,
        message: "Failed to submit plan selection",
      })
    }
  },
}

module.exports = formController
