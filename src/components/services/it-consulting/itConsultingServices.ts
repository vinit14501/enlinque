import {
  Cloud,
  Server,
  Shield,
  RefreshCcw,
  Lightbulb,
  ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ItConsultingService {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export const itConsultingServices: ItConsultingService[] = [
  {
    icon: Cloud,
    title: "Cloud Strategy & Migration",
    points: [
      "Cloud readiness assessment",
      "Migration planning and execution",
      "Multi-cloud and hybrid cloud architecture",
      "Cost optimization and auto-scaling",
      "Cloud security and governance",
      "Ongoing cloud performance monitoring",
    ],
  },
  {
    icon: Server,
    title: "IT Infrastructure Optimization",
    points: [
      "Performance and capacity planning",
      "Network and server optimization",
      "Legacy system modernization",
      "Scalable infrastructure design",
      "Data center consolidation",
      "Disaster recovery planning",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Risk Management",
    points: [
      "Security audits and vulnerability assessments",
      "Risk identification and mitigation strategies",
      "Compliance and regulatory guidance",
      "Incident response planning",
      "Data protection and encryption",
      "Security awareness training",
    ],
  },
  {
    icon: RefreshCcw,
    title: "System Modernization",
    points: [
      "Legacy application upgrades and re-platforming",
      "Platform migration and integration",
      "Workflow digitization and process automation",
      "Technology stack evaluation and transition",
      "API-first modernization approach",
      "Continuous improvement frameworks",
    ],
  },
  {
    icon: Lightbulb,
    title: "Technology Advisory",
    points: [
      "Strategic IT roadmap development",
      "Vendor evaluation and selection",
      "Digital transformation guidance",
      "Innovation-driven technology recommendations",
      "Emerging technology feasibility studies",
      "Technology investment prioritization",
    ],
  },
  {
    icon: ClipboardList,
    title: "IT Audits & Vendor Management",
    points: [
      "Comprehensive IT infrastructure audits",
      "Software licensing and compliance reviews",
      "Third-party vendor assessments",
      "Contract negotiation support",
      "Vendor performance monitoring",
      "IT spend optimization",
    ],
  },
];
