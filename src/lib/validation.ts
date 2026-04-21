import { z } from "zod";

export const PHONE_REGEX = /^\+?[\d\s-]+$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  company: z
    .string()
    .trim()
    .min(1, "Company name is required")
    .max(100, "Company name cannot exceed 100 characters"),
  email: z.string().trim().email("Please provide a valid email address"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number cannot exceed 20 characters")
    .regex(PHONE_REGEX, "Please provide a valid phone number"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export const planFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  email: z.string().trim().email("Please provide a valid email address"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number cannot exceed 20 characters")
    .regex(PHONE_REGEX, "Please provide a valid phone number"),
  selectedPlan: z.object({
    name: z
      .string()
      .trim()
      .min(1, "Plan name is required")
      .max(50, "Plan name cannot exceed 50 characters"),
    price: z.number({ message: "Plan price is required" }),
    isStartingPrice: z.boolean().optional().default(false),
  }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type PlanFormInput = z.infer<typeof planFormSchema>;
