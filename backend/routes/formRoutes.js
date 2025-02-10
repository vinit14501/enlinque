const express = require("express")
const router = express.Router()
const formController = require("../controllers/formController")
const { formSubmissionLimiter } = require("../middleware/rateLimiter")
const {
  validateContactForm,
  validatePlanForm,
  validate,
} = require("../middleware/validator")

router.post(
  "/contact",
  formSubmissionLimiter,
  validateContactForm,
  validate,
  formController.submitContactForm
)

router.post(
  "/plan",
  formSubmissionLimiter,
  validatePlanForm,
  validate,
  formController.submitPlanForm
)

module.exports = router
