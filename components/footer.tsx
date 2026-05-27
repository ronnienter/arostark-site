import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 flex flex-col sm:flex-row items-start justify-between gap-10 px-6">
        <div className="max-w-xs">
          <span className="text-xl font-semibold tracking-tight">arostark</span>
          <p className="mt-3 text-muted-foreground text-sm">
            Secure cloud infrastructure, built to scale.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-foreground">
          <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Book a Call</Link>
        </nav>
      </div>
      <Separator />
      <div className="max-w-(--breakpoint-xl) mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        <span className="text-muted-foreground text-sm text-center xs:text-start">
          &copy; {new Date().getFullYear()} Arostark. All rights reserved.
        </span>
        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="#" target="_blank" className="hover:text-foreground transition-colors">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank" className="hover:text-foreground transition-colors">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;