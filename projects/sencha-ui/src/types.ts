export interface ThemeContext {
  text: string;
  background: string;
}

export interface SenchaColorTheme {
  primary?: ThemeContext;
  secondary?: ThemeContext;
  danger?: ThemeContext;
  success?: ThemeContext;
  warning?: ThemeContext;
  info?: ThemeContext;
  background?: string;
  text?: string;
}

export interface SenchaElement {
  theme: SenchaColorTheme;
}
