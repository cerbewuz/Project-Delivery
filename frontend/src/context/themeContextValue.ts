import { createContext } from "react";
import type { Theme } from "../types/theme";

export interface ThemeContextValue {
  /** The currently active theme. */
  theme: Theme;
  /** Set a specific theme. */
  setTheme: (theme: Theme) => void;
  /** Toggle between light ↔ dark. */
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
