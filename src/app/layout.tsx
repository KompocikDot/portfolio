import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/scrolltop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kacper Soczko personal page",
  description: "My CV, blog and contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen w-full max-w-2xl mx-auto">
          {children}
          <footer className="flex flex-row justify-center pb-5 w-full">KompocikDot @ {new Date().getFullYear()}</footer>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
