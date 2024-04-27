"use client"

import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useThemeContext } from "@/context/theme";

const inter = Inter({ subsets: ["latin"] });

export function BodyLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();

  return (
    <body className={`flex flex-col min-h-[100vh] container max-w-6xl ${inter.className} ${theme}`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </body>
  );
}