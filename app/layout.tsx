import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Code Sartor — AI • Apps • Automation",
  description: "...",
  openGraph: {
    title: "Code Sartor",
    description: "Premium software systems and automation.",
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