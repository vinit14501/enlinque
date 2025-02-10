const mongoose = require("mongoose")
const validator = require("validator")

const planFormSchema = new mongoose.Schema({
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
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    validate: {
      validator: function (v) {
        return /^\+?[\d\s-]+$/.test(v)
      },
      message: "Please provide a valid phone number",
    },
  },
  selectedPlan: {
    name: {
      type: String,
      required: [true, "Plan name is required"],
    },
    price: {
      type: Number,
      required: [true, "Plan price is required"],
    },
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("PlanForm", planFormSchema)
