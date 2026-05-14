import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Code Sartor — AI • Apps • Automation",

  description:
    "Code Sartor builds premium software systems, AI automation, dashboards, websites, and business applications designed to modernize and optimize operations.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Code Sartor — AI • Apps • Automation",
    description:
      "Premium software systems, automation, dashboards, and modern business applications.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body> {
        children}
        <Analytics />
      </body>
    </html>
  );
}