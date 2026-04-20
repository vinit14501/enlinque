import mongoose, { type Document } from "mongoose";

export interface IContactForm extends Document {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: Date;
}

const contactFormSchema = new mongoose.Schema<IContactForm>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  company: {
    type: String,
    required: [true, "Company name is required"],
    trim: true,
    maxlength: [100, "Company name cannot exceed 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    maxlength: [20, "Phone number cannot exceed 20 characters"],
    validate: {
      validator: function (v: string) {
        return /^\+?[\d\s-]+$/.test(v);
      },
      message: "Please provide a valid phone number",
    },
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    maxlength: [1000, "Message cannot exceed 1000 characters"],
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export const ContactForm =
  mongoose.models.ContactForm ||
  mongoose.model<IContactForm>("ContactForm", contactFormSchema);
