export interface ThemeContext {
  text: string;
  background: string;
  activated?: {
    text: string;
    background: string;
  };
}

export interface SenchaColorTheme {
  primary?: ThemeContext;
  secondary?: ThemeContext;
  danger?: ThemeContext;
  success?: ThemeContext;
  warning?: ThemeContext;
  info?: ThemeContext;
}

export interface SenchaElement {
  theme: SenchaColorTheme;
}
