import type { Metadata } from "next";
import { Outfit, Oswald } from "next/font/google";
import "./globals.css";
import SmoothScroller from "./components/SmoothScroller";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "BABARKEE. | Elevate Everyday.",
  description: "Premium streetwear brand focusing on quality and modern aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${oswald.variable} font-sans antialiased bg-white text-black`}
      >
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
