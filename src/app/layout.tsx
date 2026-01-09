import ClarityScript from "@/components/clarity-script";
import GoogleAnalytics from "@/components/google-analytics";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
// @ts-ignore
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Ferry Hasan",
    "Full Stack Developer",
    "Motion Designer",
    "Web Developer",
    "React.js Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Surabaya Developer",
    "Indonesia Developer",
    "Portfolio",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Motion Graphics",
    "After Effects",
    "Blender",
  ],
  authors: [
    {
      name: DATA.name,
      url: DATA.url,
    },
  ],
  creator: DATA.name,
  publisher: DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DATA.url,
    title: DATA.name,
    description: DATA.description,
    siteName: DATA.name,
    images: [
      {
        url: DATA.avatarUrl,
        width: 500,
        height: 500,
        alt: `${DATA.name} - ${DATA.description}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.description,
    images: [DATA.avatarUrl],
    creator: "@fleksipi",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: DATA.url,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <GoogleAnalytics />
            <ClarityScript />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
