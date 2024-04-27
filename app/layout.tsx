import ThemeContextProvider from "@/context/theme";
import { BodyLayout } from "./body-layout";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portifolio | Igor Souza",
  description: "Personal website with blog and projects",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-light.svg',
        href: '/logo-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-dark.svg',
        href: '/logo-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <BodyLayout>{children}</BodyLayout>
      </ThemeContextProvider>
    </html>
  );
}
