// src/theme/ThemeProvider.tsx
import React, { createContext, useContext, ReactNode } from "react";
import { createTheme, Theme } from "./createTheme";

// ✅ Đây là biến context, KHÔNG phải namespace
const ThemeContext = createContext<Theme | undefined>(undefined);

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const mergedTheme = theme || createTheme("light");

  return (
    <ThemeContext.Provider value={mergedTheme}>

      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Hook để dùng theme
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
