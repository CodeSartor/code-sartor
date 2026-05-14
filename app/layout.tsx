import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Code Sartor — AI • Apps • Automation",
  description:
    "Premium software systems, AI workflows, automation, dashboards, and business applications.",
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