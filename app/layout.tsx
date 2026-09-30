import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Bee Landscaping | Commercial Grounds & Property Maintenance | Metro Vancouver",
  description: "Professional commercial landscape maintenance for stratas, property managers, and commercial properties in Metro Vancouver. Weekly grounds maintenance, seasonal cleanups, irrigation, and property management reporting.",
  keywords: "commercial landscaping Vancouver, strata landscaping, property management landscaping, grounds maintenance Vancouver, commercial landscape contractor, Metro Vancouver landscaping",
  metadataBase: new URL("https://happybeelandscapes.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Happy Bee Landscaping | Commercial Grounds Maintenance | Metro Vancouver",
    description: "Professional commercial landscape maintenance for stratas and property managers in Metro Vancouver. Reliable, compliant, and responsive.",
    type: "website",
    locale: "en_CA",
    url: "https://happybeelandscapes.ca",
    siteName: "Happy Bee Landscaping",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
