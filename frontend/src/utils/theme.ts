import { isValidTheme, type Theme } from "../types/theme";

const STORAGE_KEY = "app-theme";

/**
 * Read the persisted theme from localStorage, falling back to system preference.
 */
export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && isValidTheme(stored)) return stored;

  return getSystemPreference();
}

/**
 * Persist the chosen theme to localStorage.
 */
export function persistTheme(theme: Theme): void {
  localStorage.setItem(STORAGE_KEY, theme);
}

/**
 * Detect the user's OS-level color scheme preference.
 */
export function getSystemPreference(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
