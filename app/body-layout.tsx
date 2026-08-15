"use client"

import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export function BodyLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={`flex flex-col min-h-[100vh] ${inter.className}`}>
      <div className="flex flex-col min-h-[100vh] container max-w-6xl print:max-w-none print:p-0">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </body>
  );
}