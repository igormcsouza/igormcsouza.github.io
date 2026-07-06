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

// Runs before first paint so the page never flashes the wrong theme.
// Must mirror determineTheme() in context/theme.tsx.
const themeInitScript = `
try {
  var theme = localStorage.getItem("themePreference")
    || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.classList.add(theme);
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <ThemeContextProvider>
        <BodyLayout>{children}</BodyLayout>
      </ThemeContextProvider>
    </html>
  );
}
