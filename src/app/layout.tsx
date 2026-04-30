import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://productnatives.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ProductNatives — Build Products People Actually Need",
    template: "%s | ProductNatives",
  },
  description:
    "Frameworks, lessons, and community for the people who build products. Weekly insights from Arun Jacob — 20 years of product experience at Adobe, Microsoft, Nike, and Boeing.",
  keywords: [
    "product management",
    "product design",
    "product frameworks",
    "startup",
    "founders",
    "product managers",
    "Arun Jacob",
    "ProductNatives",
    "build products",
    "product newsletter",
  ],
  authors: [{ name: "Arun Jacob", url: siteUrl }],
  creator: "Arun Jacob",
  publisher: "ProductNatives",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ProductNatives",
    title: "ProductNatives — Build Products People Actually Need",
    description:
      "Frameworks, lessons, and community for the people who build products. Weekly insights from Arun Jacob.",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "ProductNatives — Build Products People Actually Need",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arunjacob",
    creator: "@arunjacob",
    title: "ProductNatives — Build Products People Actually Need",
    description:
      "Frameworks, lessons, and community for the people who build products. Weekly insights from Arun Jacob.",
    images: ["/og-default.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "192x192" }],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ProductNatives",
  url: siteUrl,
  founder: {
    "@type": "Person",
    name: "Arun Jacob",
    sameAs: [
      "https://www.linkedin.com/in/arunjacobk/",
      "https://x.com/arunjacob",
    ],
  },
  sameAs: [
    "https://www.linkedin.com/in/arunjacobk/",
    "https://x.com/arunjacob",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xln2vhb.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`antialiased`}>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
