/**
 * HTML-escapes a string to prevent XSS in email templates.
 * Applied to ALL user-supplied strings before template interpolation.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: Date;
}

interface PlanFormData {
  name: string;
  email: string;
  phone: string;
  selectedPlan: {
    name: string;
    price: number;
    isStartingPrice?: boolean;
  };
  submittedAt: Date;
}

export function contactFormTemplate(data: ContactFormData): string {
  const name = escapeHtml(data.name);
  const company = escapeHtml(data.company);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const message = escapeHtml(data.message);

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    .container { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
    .header { background: #000048; color: white; padding: 20px; }
    .content { padding: 20px; }
    .footer { background: #f5f5f5; padding: 20px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Submitted at:</strong> ${new Date(data.submittedAt).toLocaleString()}</p>
    </div>
    <div class="footer">
      <p>This is an automated message from your website contact form.</p>
    </div>
  </div>
</body>
</html>`;
}

export function planFormTemplate(data: PlanFormData): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const planName = escapeHtml(data.selectedPlan.name);

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    .container { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
    .header { background: #000048; color: white; padding: 20px; }
    .content { padding: 20px; }
    .plan-details { background: #f0f7ff; padding: 15px; margin: 10px 0; }
    .footer { background: #f5f5f5; padding: 20px; text-align: center; }
    .price-label { color: #666; font-size: 0.9em; margin-bottom: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Plan Subscription Request</h2>
    </div>
    <div class="content">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <div class="plan-details">
        <h3>Selected Plan Details</h3>
        <p><strong>Plan Name:</strong> ${planName}</p>
        ${data.selectedPlan.isStartingPrice ? '<p class="price-label">Starting at</p>' : ""}
        <p><strong>Price:</strong> $${data.selectedPlan.price}/month</p>
      </div>
      <p><strong>Submitted at:</strong> ${new Date(data.submittedAt).toLocaleString()}</p>
    </div>
    <div class="footer">
      <p>This is an automated message from your website subscription form.</p>
    </div>
  </div>
</body>
</html>`;
}

export function contactAcknowledgmentTemplate(name: string): string {
  const safeName = escapeHtml(name);
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #000048;">Thank you for contacting us!</h2>
      <p>Dear ${safeName},</p>
      <p>We have received your message and will get back to you shortly.</p>
      <p>Best regards,<br>Enlinque Team</p>
    </div>
  `;
}

export function planAcknowledgmentTemplate(
  name: string,
  planName: string,
): string {
  const safeName = escapeHtml(name);
  const safePlanName = escapeHtml(planName);
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #000048;">Thank you for choosing our services!</h2>
      <p>Dear ${safeName},</p>
      <p>We have received your request for the ${safePlanName} plan.</p>
      <p>Our team will contact you shortly to complete the setup process.</p>
      <p>Best regards,<br>Enlinque Team</p>
    </div>
  `;
}
