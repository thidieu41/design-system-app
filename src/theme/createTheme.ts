import { colors, spacing, typography } from "./token";

export const createTheme = (mode: "light" | "dark" = "light") => ({
  palette: {
    mode,
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    text: {
      primary: mode === "light" ? colors.gray[900] : "#fff",
      secondary: mode === "light" ? colors.gray[700] : colors.gray[300],
    },
    action: {
      disabledBackground: mode === "light" ? "#e0e0e0" : "#424242",
      disabledText: mode === "light" ? "#9e9e9e" : "#bdbdbd",
      disabledBorder: mode === "light" ? "#bdbdbd" : "#616161",
      loadingBackground: "#d6e4ff",
    },
  },
  background: {
    default: mode === "light" ? "#fff" : colors.gray[900],
    paper: mode === "light" ? "#fff" : colors.gray[800],
  },
  typography,
  spacing,
});

export type Theme = ReturnType<typeof createTheme>;
