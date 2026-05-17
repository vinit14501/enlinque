import {
  Workflow,
  CloudUpload,
  RefreshCcw,
  BarChart3,
  Bot,
  Map,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DigitalTransformationService {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export const digitalTransformationServices: DigitalTransformationService[] = [
  {
    icon: Workflow,
    title: "Process Automation",
    points: [
      "Business workflow analysis and redesign",
      "Robotic Process Automation (RPA) implementation",
      "AI-assisted task automation and orchestration",
      "Operational bottleneck identification and elimination",
      "Document and approval workflow digitization",
      "KPI tracking for automated processes",
    ],
  },
  {
    icon: CloudUpload,
    title: "Cloud Migration & Integration",
    points: [
      "On-premise to cloud migration strategy",
      "Hybrid and multi-cloud architecture design",
      "Legacy system integration with cloud platforms",
      "Cloud cost management and governance",
      "Data migration with zero-downtime approaches",
      "Post-migration optimization and monitoring",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Enterprise Modernization",
    points: [
      "Legacy application re-platforming and refactoring",
      "Microservices and API-first architecture adoption",
      "ERP, CRM, and core system modernization",
      "Technology stack evaluation and upgrades",
      "Containerization and cloud-native transition",
      "Change management and adoption support",
    ],
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    points: [
      "Business intelligence (BI) platform implementation",
      "Real-time analytics dashboards and reporting",
      "Predictive analytics and forecasting integration",
      "Data governance, quality, and lineage management",
      "Customer behavior and market trend analysis",
      "Self-service analytics enablement",
    ],
  },
  {
    icon: Bot,
    title: "AI & Technology Integration",
    points: [
      "AI/ML model integration into business workflows",
      "Intelligent automation and decision engines",
      "Chatbots, virtual assistants, and NLP solutions",
      "IoT and smart system integration",
      "Computer vision and document intelligence",
      "Generative AI adoption and governance",
    ],
  },
  {
    icon: Map,
    title: "Digital Roadmap Development",
    points: [
      "Current-state digital maturity assessments",
      "Future-state strategy and vision alignment",
      "Transformation milestone and priority planning",
      "Cross-functional stakeholder alignment",
      "Change management and training programs",
      "Ongoing advisory and progress reviews",
    ],
  },
];
