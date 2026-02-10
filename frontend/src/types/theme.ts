export const THEMES = ["light", "dark"] as const;

export type Theme = (typeof THEMES)[number];

export function isValidTheme(value: string): value is Theme {
  return THEMES.includes(value as Theme);
}
