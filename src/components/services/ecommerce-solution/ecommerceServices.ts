import {
  Store,
  ShoppingCart,
  CreditCard,
  Package,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface EcommerceService {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export const ecommerceServices: EcommerceService[] = [
  {
    icon: Store,
    title: "Custom Store Development",
    points: [
      "Bespoke e-commerce website design and development",
      "Brand-aligned storefront and theme creation",
      "Custom feature and functionality development",
      "Seamless CMS and product catalog integration",
      "Scalable architecture for high-traffic stores",
      "Multi-language and multi-currency support",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Shopify & WooCommerce Solutions",
    points: [
      "Platform setup, configuration, and theme development",
      "Custom plugin and extension development",
      "Migration from existing platforms",
      "Store performance tuning and optimization",
      "App integrations and third-party tools",
      "Shopify Plus and enterprise WooCommerce support",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    points: [
      "Stripe, PayPal, Razorpay, and major gateway setups",
      "Multi-currency and regional payment support",
      "Secure and optimized checkout flow",
      "Fraud prevention and chargeback management",
      "Subscription and recurring billing systems",
      "PCI-DSS compliance guidance",
    ],
  },
  {
    icon: Package,
    title: "Inventory & Order Management",
    points: [
      "Real-time inventory tracking and alerts",
      "Multi-warehouse and fulfillment management",
      "Automated order processing and notifications",
      "ERP and POS system integration",
      "Return and refund workflow management",
      "Supplier and vendor portal integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly & SEO-Optimized Stores",
    points: [
      "Fully responsive mobile-first design",
      "Core Web Vitals and page speed optimization",
      "Structured data and schema markup for SEO",
      "Product page SEO and metadata management",
      "Image compression and lazy loading",
      "Google Shopping and marketplace feed integration",
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    points: [
      "Checkout flow analysis and improvement",
      "A/B testing of product pages and CTAs",
      "Upsell, cross-sell, and bundling strategies",
      "Advanced analytics and heatmap integration",
      "Customer retention and loyalty programs",
      "Abandoned cart recovery automation",
    ],
  },
];
