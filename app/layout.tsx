import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arostark - secure cloud architecture & infrastructure automation",
  description:
    "Arostark helps startups and businesses deploy, secure, and manage cloud systems — fast, lean, and production-ready.",
  keywords: [
    "cloud infrastructure",
    "AWS consulting",
    "security hardening",
    "cloud deployment",
    "Terraform",
    "CI/CD pipeline",
    "infrastructure as code",
    "cloud security",
    "startup infrastructure",
    "DevOps consulting",
  ],
  openGraph: {
    type: "website",
    siteName: "Arostark",
    locale: "en_US",
    url: "https://arostark.com",
    title: "arostark - secure cloud architecture & infrastructure automation",
    description:
      "Arostark helps startups and businesses deploy, secure, and manage cloud systems — fast, lean, and production-ready.",
    images: [
      {
        url: "/arostark-icon.png",
        width: 1200,
        height: 630,
        alt: "Arostark - Secure Cloud Infrastructure",
      },
    ],
  },
  authors: [
    {
      name: "Aaron Jehu",
      url: "https://arostark.com",
    },
  ],
  creator: "Aaron Jehu",
  icons: [
    {
      rel: "icon",
      url: "/arostark-icon.png",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}