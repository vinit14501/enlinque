import mongoose, { type Document } from "mongoose";

export interface IPlanForm extends Document {
  name: string;
  email: string;
  phone: string;
  selectedPlan: {
    name: string;
    price: number;
    isStartingPrice: boolean;
  };
  submittedAt: Date;
}

const planFormSchema = new mongoose.Schema<IPlanForm>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [50, "Name cannot exceed 50 characters"],
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
  selectedPlan: {
    name: {
      type: String,
      required: [true, "Plan name is required"],
      trim: true,
      maxlength: [50, "Plan name cannot exceed 50 characters"],
    },
    price: {
      type: Number,
      required: [true, "Plan price is required"],
    },
    isStartingPrice: {
      type: Boolean,
      default: false,
    },
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export const PlanForm =
  mongoose.models.PlanForm ||
  mongoose.model<IPlanForm>("PlanForm", planFormSchema);
