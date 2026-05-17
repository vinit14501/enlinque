import {
  Compass,
  RefreshCcw,
  LayoutGrid,
  GraduationCap,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AgileService {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export const agileServices: AgileService[] = [
  {
    icon: Compass,
    title: "Agile Transformation Consulting",
    points: [
      "Agile readiness and maturity assessments",
      "Transformation roadmap and strategy development",
      "Cultural change management and leadership coaching",
      "Organizational structure alignment",
      "Agile metrics and success criteria definition",
      "Stakeholder buy-in and communication planning",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Scrum Implementation",
    points: [
      "Scrum framework setup and team onboarding",
      "Product backlog creation and management",
      "Sprint planning and review facilitation",
      "Scrum Master training and mentoring",
      "Definition of Done and acceptance criteria",
      "Velocity tracking and burndown chart analysis",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Kanban Framework Setup",
    points: [
      "Visual workflow design and board configuration",
      "Work-in-progress (WIP) limit optimization",
      "Kanban tooling setup (Jira, Trello, Azure DevOps)",
      "Continuous flow analysis and improvement",
      "Lead time and cycle time measurement",
      "Cumulative flow diagram reporting",
    ],
  },
  {
    icon: GraduationCap,
    title: "Agile Coaching & Training",
    points: [
      "Team-level agile coaching and mentoring",
      "Agile workshops, simulations, and training",
      "Role-specific coaching for PMs, POs, and developers",
      "Certification preparation and support",
      "Best-practice implementation and retrospectives",
      "Scaled agile frameworks (SAFe, LeSS) guidance",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Sprint Planning & Management",
    points: [
      "Sprint goal definition and alignment",
      "Story point estimation and capacity planning",
      "Backlog refinement and grooming sessions",
      "Impediment identification and removal",
      "Cross-team dependency management",
      "Release planning and roadmap alignment",
    ],
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement Systems",
    points: [
      "Retrospective facilitation and action tracking",
      "KPI and agile metrics frameworks",
      "Feedback loop design and implementation",
      "Quality gates and code review integration",
      "Long-term performance monitoring and reporting",
      "Innovation sprints and hackathon facilitation",
    ],
  },
];
