import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Absolutely HTX",
  description: "A dreamy Houston open mic venue website with shows, artists, and submissions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}  
        </main>
        <Footer />
      </body>
    </html>
  );
}
