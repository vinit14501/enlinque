import {
  Globe,
  Smartphone,
  Building2,
  Puzzle,
  Cloud,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SoftwareDevelopmentService {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export const softwareDevelopmentServices: SoftwareDevelopmentService[] = [
  {
    icon: Globe,
    title: "Web Application Development",
    points: [
      "Custom web apps with React, Next.js, and modern stacks",
      "Progressive Web Apps (PWAs)",
      "Admin dashboards and business portals",
      "Cross-browser compatibility and accessibility",
      "Performance-optimized front-end architecture",
      "Real-time features and live data integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    points: [
      "iOS and Android native application development",
      "Cross-platform apps with React Native and Flutter",
      "App performance optimization and UX refinement",
      "Push notifications and offline capabilities",
      "App Store and Google Play deployment",
      "Post-launch support and version management",
    ],
  },
  {
    icon: Building2,
    title: "SaaS & Enterprise Platforms",
    points: [
      "Multi-tenant SaaS architecture design",
      "Enterprise resource planning (ERP) solutions",
      "Customer portals and self-service systems",
      "Subscription billing and access management",
      "Role-based access control (RBAC)",
      "High-availability and fault-tolerant systems",
    ],
  },
  {
    icon: Puzzle,
    title: "API Integration & Development",
    points: [
      "RESTful and GraphQL API development",
      "Third-party API and service integrations",
      "Microservices architecture design",
      "API versioning, documentation, and testing",
      "Webhooks and event-driven systems",
      "Secure authentication and OAuth 2.0",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud-Based Systems",
    points: [
      "Cloud-native application development",
      "AWS, Azure, and GCP deployments",
      "Serverless and containerized architectures",
      "Auto-scaling and load-balanced infrastructure",
      "CI/CD pipeline setup and DevOps practices",
      "Cloud cost management and optimization",
    ],
  },
  {
    icon: Layers,
    title: "UI/UX Design & Delivery",
    points: [
      "User research, personas, and journey mapping",
      "Wireframing, prototyping, and design systems",
      "Responsive and accessible UI development",
      "End-to-end QA testing and bug resolution",
      "Performance and security audits pre-launch",
      "Ongoing maintenance and feature enhancements",
    ],
  },
];
