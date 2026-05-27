import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://www.codesartor.com"),

  title: "Code Sartor — AI • Apps • Automation",

  description:
    "Code Sartor builds premium software systems, AI automation, dashboards, websites, and business applications designed to modernize and optimize operations.",

  keywords: [
    "Code Sartor",
    "software development",
    "custom software",
    "AI automation",
    "business automation",
    "website development",
    "business applications",
    "dashboard systems",
    "South Africa software company",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Code Sartor — AI • Apps • Automation",
    description:
      "Premium software systems, automation, dashboards, and modern business applications.",
    url: "https://www.codesartor.com",
    siteName: "Code Sartor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Sartor — AI, Apps and Automation",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
