import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Kampress Global Placement Services",
  description: "Welcome to Kampress Global Placement Services. We make studying abroad easy. Study in Canada, United States, United Kingdom, Netherlands, France, Australia, Ireland, Barbados, Ghana and Mauritius.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased")}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
