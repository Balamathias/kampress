import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBot from "@/components/home/WhatsAppBot";

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
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p>This site can't be reached due to outdated dependencies and plugins conflicts.</p>
           <p
              
                className="mt-4 px-4 py-2 text-sm transition underline cursor-pointer"
              >
                Retry
              </p>
        </div>
        {/* <Navbar />
        {children}
        <WhatsAppBot />
        <Footer /> */}
      </body>
    </html>
  );
}
