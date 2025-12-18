import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Mohammed Suhaib — Portfolio",
  description:
    "Business Excellence, Digital Transformation, Governance & Performance. Portfolio and resume.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Mohammed Suhaib — Portfolio",
    description:
      "Business Excellence • Digital Transformation • Governance & Performance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Suhaib — Portfolio",
    description:
      "Business Excellence • Digital Transformation • Governance & Performance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="noise" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
