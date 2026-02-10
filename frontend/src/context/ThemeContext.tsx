import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { THEMES, type Theme } from "../types/theme";
import { getInitialTheme, persistTheme } from "../utils/theme";
import { ThemeContext } from "./themeContextValue";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    persistTheme(newTheme);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Apply / remove theme classes on <html>
  useEffect(() => {
    const root = document.documentElement;

    // Remove all possible theme classes
    root.classList.remove(...THEMES.filter((t) => t !== "light"));

    if (theme !== "light") {
      root.classList.add(theme);
    }
  }, [theme]);

  // Listen for OS preference changes (only when user hasn't explicitly chosen)
  useEffect(() => {
    const stored = localStorage.getItem("app-theme");
    if (stored) return; // User has an explicit preference — don't override

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleDarkMode }),
    [theme, setTheme, toggleDarkMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
