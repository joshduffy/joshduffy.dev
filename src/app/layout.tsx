import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Josh Duffy | Transformation & Integration Leader",
  description:
    "Portfolio of Josh Duffy - Navy veteran, transformation leader, and technical builder based in Philadelphia.",
  keywords: [
    "Josh Duffy",
    "transformation",
    "integration",
    "consulting",
    "technical builder",
    "Philadelphia",
  ],
  authors: [{ name: "Josh Duffy" }],
  openGraph: {
    title: "Josh Duffy | Transformation & Integration Leader",
    description:
      "Portfolio of Josh Duffy - Navy veteran, transformation leader, and technical builder based in Philadelphia.",
    url: "https://joshduffy.dev",
    siteName: "Josh Duffy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Duffy | Transformation & Integration Leader",
    description:
      "Portfolio of Josh Duffy - Navy veteran, transformation leader, and technical builder based in Philadelphia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        {children}
      </body>
    </html>
  );
}
