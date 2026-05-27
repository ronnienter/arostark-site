import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "Cloud Audit",
    price: 500,
    description:
      "Infrastructure review for performance, security, and reliability.",
    features: [
      "25+ infrastructure security checks",
      "48-hour audit delivery",
      "Up to 30% cost optimization insights",
      "1-hour architecture review session",
      
    ],
    buttonText: "Book an Audit",
  },
  {
    name: "Secure MVP",
    price: 2500,
    description:
      "Production-ready cloud deployment for startups and modern platforms.",
    features: [
      "72-hour deployment turnaround",
      "3-tier isolated cloud architecture",
      "Automated CI/CD deployment pipeline",
      "Zero-Trust IAM security configuration",
      
    ],
    buttonText: "Deploy Your MVP",
    isPopular: true,
  },
  {
    name: "Enterprise Guard",
    price: 1000,
    billingCycle: "/mo",
    description:
      "Ongoing infrastructure support, monitoring, and optimization.",
    features: [
      "99.9% uptime monitoring setup",
      "Weekly maintenance & patch reviews",
      "Monthly infrastructure optimization",
      "Priority technical support response",
      
    ],
    buttonText: "Request Support",
  },
];

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="max-w-(--breakpoint-lg) mx-auto py-12 xs:py-20 px-6"
    >
      <h1 className="text-4xl xs:text-5xl font-semibold text-center tracking-tight">
        Pricing
      </h1>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-background border-[2px] border-primary py-12 rounded-xl!":
                  plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold"> 
              ${plan.price}
              {plan.billingCycle && (
                <span className="text-base font-normal text-muted-foreground">{plan.billingCycle}</span>
            )}
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6 rounded-full"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
