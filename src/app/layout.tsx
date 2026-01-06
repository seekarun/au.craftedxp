import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crafted XP | Exceptional Digital Experiences",
  description:
    "Crafted XP creates bespoke digital experiences that transform how businesses connect with their audiences. We blend creativity with technology to deliver exceptional results.",
  keywords: [
    "digital agency",
    "web development",
    "user experience",
    "brand design",
    "digital transformation",
  ],
  authors: [{ name: "Crafted XP" }],
  openGraph: {
    title: "Crafted XP | Exceptional Digital Experiences",
    description:
      "We create bespoke digital experiences that transform how businesses connect with their audiences.",
    type: "website",
    locale: "en_AU",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
