import { Card, CardHeader } from "@/components/ui/card";
import {
  Cloud,
  ShieldCheck,
  GitBranch,
  Server,
  Lock,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Setup",
    description:
      "Deploy scalable, production-ready cloud environments on AWS — configured correctly from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Security Hardening",
    description:
      "Zero-Trust IAM policies, network isolation, and security best practices applied across your stack.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Automation",
    description:
      "Automated deployment pipelines that ship your code fast, reliably, and without manual intervention.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description:
      "Your entire infrastructure defined, versioned, and reproducible using Terraform.",
  },
  {
    icon: Lock,
    title: "Compliance & Audit Readiness",
    description:
      "25+ point infrastructure audits that surface vulnerabilities and cost inefficiencies before they become problems.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Identify bottlenecks, reduce cloud spend, and keep your systems running lean at any scale.",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-semibold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        What We Build & Secure
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {services.map((service) => (
          <Card
            key={service.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none"
          >
            <CardHeader>
              <service.icon className="h-6 w-6" />
              <h4 className="mt-3! text-xl font-semibold tracking-tight">
                {service.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {service.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;