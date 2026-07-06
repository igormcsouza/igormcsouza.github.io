"use client"

import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react"

interface ThemeContextProps {
  theme: string | undefined
  handleChangeTheme: (choise: string) => void
}

const ThemeContext = createContext<ThemeContextProps>({ theme: "dark", handleChangeTheme: () => {} })

const determineTheme = () => {
  const localTheme = localStorage.getItem("themePreference")
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  return localTheme || systemTheme
}

// The theme class lives on <html> so it controls CSS variables, Tailwind's
// dark: variants and the browser color-scheme everywhere, including before
// hydration (see the inline script in app/layout.tsx).
const applyTheme = (choise: string) => {
  document.documentElement.classList.remove(choise === "dark" ? "light" : "dark")
  document.documentElement.classList.add(choise)
}

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>()

  useEffect(() => {
    const initial = determineTheme()
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const handleChangeTheme = useCallback((choise: string) => {
    setTheme(choise)
    applyTheme(choise)
    localStorage.setItem("themePreference", choise)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}

export function useThemeContext() {
  return useContext(ThemeContext)
}