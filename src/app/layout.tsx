import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProductOS — Build Products People Actually Need",
  description:
    "Frameworks, lessons, and community for the people who build products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Adobe fonts code here */}
        <link rel="stylesheet" href="https://use.typekit.net/xln2vhb.css" />
      </head>
      <body className={`antialiased`}>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
