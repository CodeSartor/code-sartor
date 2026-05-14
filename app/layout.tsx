import "./globals.css";

export const metadata = {
  title: "Code Sartor",
  description: "Apps, AI, automation and modern business systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}