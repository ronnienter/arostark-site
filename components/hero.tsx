"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const lines = [
  { text: "$ terraform plan --out=infra.tfplan", color: "text-muted-foreground" },
  { text: "✔ Plan complete — 12 resources to add", color: "text-green-500" },
  { text: "$ aws iam apply zero-trust-policy", color: "text-muted-foreground" },
  { text: "✔ IAM roles configured successfully", color: "text-green-500" },
  { text: "$ deploy --env production --region us-east-1", color: "text-muted-foreground" },
  { text: "✔ CI/CD pipeline triggered — build #47", color: "text-green-500" },
  { text: "$ run security-audit --deep", color: "text-muted-foreground" },
  { text: "⚡ 3 recommendations — report delivered in 47s", color: "text-yellow-400" },
];

const TYPING_SPEED = 35;
const LINE_PAUSE = 600;
const LOOP_PAUSE = 1800;

const Hero = () => {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; color: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) {
      const loopTimer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, LOOP_PAUSE);
      return () => clearTimeout(loopTimer);
    }

    const target = lines[currentLine];

    if (currentChar < target.text.length) {
      const charTimer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          if (updated.length <= currentLine) {
            updated.push({ text: target.text[currentChar], color: target.color });
          } else {
            updated[currentLine] = {
              text: updated[currentLine].text + target.text[currentChar],
              color: target.color,
            };
          }
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(charTimer);
    } else {
      const lineTimer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);
      return () => clearTimeout(lineTimer);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-(--breakpoint-xl) w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <Badge className="rounded-full py-1 border-none">
            Now Onboarding Clients
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-semibold leading-[1.2]! tracking-tight">
            Secure Cloud Infrastructure, Built to Scale
          </h1>
          <p className="mt-8 max-w-[60ch] xs:text-lg text-muted-foreground">
            Arostark helps startups and businesses deploy, secure, and manage
            cloud systems — fast, lean, and production-ready.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full text-base">
              Book a Call <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto rounded-full text-base shadow-none">
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square font-mono text-sm p-6 flex flex-col gap-2 overflow-hidden">
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <Terminal className="h-4 w-4" />
            <span>arostark ~ infrastructure</span>
          </div>
          {displayedLines.map((line, i) => (
            <p key={i} className={line.color}>{line.text}</p>
          ))}
          <span className="inline-block w-2 h-4 bg-current animate-[blink_1s_step-end_infinite] mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;