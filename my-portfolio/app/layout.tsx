import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap"
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap"
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "DerooStudio - Creative web systems by Jayden de Roo",
    template: "%s | DerooStudio"
  },
  description:
    "DerooStudio is the web and AI production practice of Jayden de Roo: premium websites, motion-led interfaces, and practical AI workflows for stronger online presence.",
  metadataBase: new URL("https://deroostudio.nl"),
  openGraph: {
    title: "DerooStudio - Creative web systems",
    description:
      "Premium websites, motion-led interfaces, and practical AI workflows for businesses that want a sharper online presence.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

