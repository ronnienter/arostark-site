import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Primarily startups and small teams that need production-ready cloud infrastructure fast. If you're launching a platform, scaling an existing system, or need your security tightened, we're a fit.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A Cloud Audit is delivered within 48 hours. An MVP deployment typically takes 3–5 days depending on scope. Managed Infrastructure is ongoing from the first month.",
  },
  {
    question: "Do you work with AWS specifically, or other cloud providers?",
    answer:
      "AWS is our primary focus. If you're on another provider like GCP or Azure, reach out and we'll discuss what's possible.",
  },
  {
    question: "What happens after I book a call?",
    answer:
      "We discuss your current setup, what you're trying to build or fix, and which service fits best. No pressure — if it's not a match, we'll tell you.",
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "No. We handle the infrastructure side end to end. You just need to know what you're building and what problems you're facing.",
  },
  {
    question: "How do I get started?",
    answer:
      "Hit 'Book a Call' anywhere on the site. We'll take it from there.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6"
    >
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Quick answers to common questions about our products and services.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none mt-0! mb-4! break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
