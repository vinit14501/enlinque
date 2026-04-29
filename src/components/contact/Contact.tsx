"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Building2,
  Mail,
  Smartphone,
  MessageCircle,
  CircleCheck,
  RefreshCw,
} from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Button from "@/components/common/Button";
import { submitContactForm } from "@/actions/contact";
import { PHONE_REGEX } from "@/lib/validation";

const initialFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

const initialErrorState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-2xl rounded-lg p-8 flex flex-col items-center justify-center min-h-100 space-y-6"
    >
      <CircleCheck className="text-green-600" size={60} />
      <h2 className="text-2xl font-bold text-[#000048] text-center">
        Thank you!
      </h2>
      <p className="text-lg text-[#000048]/80 text-center max-w-md">
        Your message has been successfully received. We will get back to you
        shortly.
      </p>
      <Button icon={RefreshCw} iconPosition="left" onClick={onReset}>
        Send Another Message
      </Button>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const { name, company, email, phone, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = PHONE_REGEX;

    const newErrors = {
      name:
        !name.trim() || name.trim().length < 2
          ? "Name must be at least 2 characters"
          : "",
      company: !company.trim() ? "Company name is required" : "",
      email:
        !email.trim() || !emailRegex.test(email)
          ? "Please enter a valid email address"
          : "",
      phone:
        !phone.trim() || !phoneRegex.test(phone)
          ? "Please enter a valid phone number"
          : "",
      message: !message.trim() ? "Message is required" : "",
    };

    setFormErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setFormErrors(initialErrorState);
    setIsSuccess(false);
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setIsSuccess(true);
        setFormData(initialFormState);
        setFormErrors(initialErrorState);
      } else {
        setSubmitError(result.message);
      }
    } catch {
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      icon: User,
      name: "name",
      id: "contact-name",
      label: "Name",
      type: "text",
      placeholder: "Name *",
    },
    {
      icon: Building2,
      name: "company",
      id: "contact-company",
      label: "Company Name",
      type: "text",
      placeholder: "Company Name *",
    },
    {
      icon: Mail,
      name: "email",
      id: "contact-email",
      label: "Email",
      type: "email",
      placeholder: "Email *",
    },
    {
      icon: Smartphone,
      name: "phone",
      id: "contact-phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Phone Number *",
    },
  ];

  return (
    <div className="bg-linear-to-br from-[#000048] to-[#0b60a0] min-h-[calc(100vh-144px)]">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-16 p-4 lg:p-8">
        {/* Left Column */}
        <div className="w-full lg:w-6/12 space-y-6 lg:space-y-12 py-4 lg:py-8 lg:-ml-12 relative z-10">
          <div className="space-y-4">
            <h1 className="text-2xl lg:text-3xl font-extralight text-white tracking-wide">
              Pave your way to
            </h1>
            <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight">
              Rapid, Smarter Business and Technology Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-8">
            <div className="flex flex-col items-start lg:border-r border-b lg:border-b-0 border-white/20 pb-3 lg:pb-0 lg:pr-4">
              <h3 className="font-bold text-lg text-white mb-2">Strategic</h3>
              <p className="text-sm text-white/90">Growth Solutions</p>
            </div>
            <div className="flex flex-col items-start lg:border-r border-b lg:border-b-0 border-white/20 pb-3 lg:pb-0 lg:pr-4">
              <h3 className="font-bold text-lg text-white mb-2 whitespace-nowrap">
                Value-centric
              </h3>
              <p className="text-sm text-white/90">Approach</p>
            </div>
            <div className="flex flex-col items-start lg:border-r border-b lg:border-b-0 border-white/20 pb-3 lg:pb-0 lg:pr-4">
              <h3 className="font-bold text-lg text-white mb-2">Scalable</h3>
              <p className="text-sm text-white/90">Technology Solutions</p>
            </div>
            <div className="flex flex-col items-start border-b lg:border-b-0 border-white/20 pb-3 lg:pb-0">
              <h3 className="font-bold text-lg text-white mb-2 whitespace-nowrap">
                Customer-centric
              </h3>
              <p className="text-sm text-white/90">Focus</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-xl text-white font-semibold whitespace-nowrap">
                Connect With Us
              </h3>
              <span className="grow border-t-2 border-white/30"></span>
            </div>

            <div className="flex gap-6">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@enlinque.com"}`}
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-300 group"
              >
                <Mail
                  className="transform group-hover:scale-110 transition-transform duration-300"
                  size={24}
                />
                <span className="font-medium">Email</span>
              </a>
              <a
                href={
                  process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-300 group"
              >
                <LinkedinIcon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column with Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-7/12 lg:pl-6 relative z-0"
        >
          <div className="lg:ml-16">
            {isSuccess ? (
              <SuccessMessage onReset={resetForm} />
            ) : (
              <div className="bg-white shadow-2xl rounded-lg p-6 lg:p-8">
                <div className="mb-8">
                  <h2 className="text-lg font-light text-[#000048] mb-2">
                    Let&apos;s Make Something Great Together!
                  </h2>
                  <h3 className="text-3xl font-bold text-[#000048] tracking-tight">
                    Start a conversation with us
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {formFields.map((field) => (
                    <div
                      key={field.name}
                      className="relative flex flex-col group"
                    >
                      <label htmlFor={field.id} className="sr-only">{field.label}</label>
                      <div className="flex items-center">
                        <field.icon className="absolute left-0 top-1/2 -translate-y-1/2 text-[#000048] text-xl group-focus-within:text-[#0b60a0] transition-colors duration-300" />
                        <input
                          id={field.id}
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          disabled={isSubmitting}
                          className={`w-full h-10 pl-8 text-[#000048] placeholder-[#000048]/60 border-b-2 ${
                            formErrors[field.name as keyof typeof formErrors]
                              ? "border-red-500"
                              : "border-gray-200"
                          } focus:border-[#0b60a0] focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                        />
                      </div>
                      {formErrors[field.name as keyof typeof formErrors] && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors[field.name as keyof typeof formErrors]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div className="relative flex flex-col group">
                    <label htmlFor="contact-message" className="sr-only">Message</label>
                    <div className="flex items-start">
                      <MessageCircle
                        className="absolute left-0 top-3 text-[#000048] group-focus-within:text-[#0b60a0] transition-colors duration-300"
                        size={20}
                      />
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message *"
                        disabled={isSubmitting}
                        className={`w-full pl-8 pt-2 text-[#000048] placeholder-[#000048]/60 border-b-2 ${
                          formErrors.message
                            ? "border-red-500"
                            : "border-gray-200"
                        } focus:border-[#0b60a0] focus:outline-none transition-colors duration-300 h-32 resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                      />
                    </div>
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-sm text-center">
                      {submitError}
                    </p>
                  )}
                  <Button
                    type="submit"
                    icon={Send}
                    loading={isSubmitting}
                    loadingText="Sending..."
                    className="w-1/2 mx-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
