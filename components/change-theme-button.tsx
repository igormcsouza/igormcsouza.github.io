"use client"

import { useThemeContext } from "@/context/theme";
import { Moon, Sun } from "lucide-react";

export default function ChangeThemeButton() {
  const { handleChangeTheme } = useThemeContext();

  // Flip based on the class actually on <html> (set pre-paint by the inline
  // script in app/layout.tsx), so the toggle is right even if React state
  // hasn't caught up with it.
  const toggleTheme = () =>
    handleChangeTheme(document.documentElement.classList.contains("dark") ? "light" : "dark");

  return (
    <button
      className="flex gap-4 my-auto dark:bg-zinc-800 bg-zinc-100 p-2 rounded-full transition-colors duration-300"
      onClick={toggleTheme}
    >
      {/* Each icon matches the pill background of the opposite theme, so the
          active one is visible and the other blends in — pure CSS, correct
          even before hydration sets `theme`. */}
      <Sun className="text-zinc-800" size={24} />
      <Moon className="text-zinc-100" size={24} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}