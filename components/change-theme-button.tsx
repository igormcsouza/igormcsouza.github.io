"use client"

import { useThemeContext } from "@/context/theme";
import { Moon, Sun } from "lucide-react";

export default function ChangeThemeButton() {
  const { theme, handleChangeTheme } = useThemeContext();

  return (
    <button
      className="flex gap-4 my-auto dark:bg-zinc-800 bg-zinc-100 p-2 rounded-full transition-color duration-300"
      onClick={() => handleChangeTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className={`${theme == "dark" && "text-zinc-800"}`} size={24} />
      <Moon className={`${theme == "light" && "text-zinc-100"}`} size={24} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}