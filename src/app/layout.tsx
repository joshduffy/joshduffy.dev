import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joshduffy.dev"),
  title: {
    default: "Josh Duffy | Building Things, Leading Transformations",
    template: "%s | Josh Duffy",
  },
  description:
    "Josh Duffy builds things and leads transformations—M&A integrations, enterprise implementations, organizational change. Based in Philadelphia.",
  keywords: [
    "Josh Duffy",
    "M&A integration",
    "transformation leader",
    "change management",
    "enterprise integration",
    "organizational change",
    "Philadelphia",
    "consulting",
  ],
  authors: [{ name: "Josh Duffy" }],
  creator: "Josh Duffy",
  openGraph: {
    title: "Josh Duffy | Building Things, Leading Transformations",
    description:
      "Josh Duffy builds things and leads transformations—M&A integrations, enterprise implementations, organizational change. Based in Philadelphia.",
    url: "https://joshduffy.dev",
    siteName: "Josh Duffy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Duffy | Building Things, Leading Transformations",
    description:
      "Josh Duffy builds things and leads transformations—M&A integrations, enterprise implementations, organizational change.",
  },
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
  verification: {
    // google: "your-google-verification-code", // Add if you have Google Search Console
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josh Duffy",
  url: "https://joshduffy.dev",
  jobTitle: "Transformation & Integration Leader",
  worksFor: {
    "@type": "Organization",
    name: "Change Managed",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/joshduffy",
    "https://www.linkedin.com/in/changeleadership/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
