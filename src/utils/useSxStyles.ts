import { useTheme } from "../theme/ThemeProvider";
import React from "react";

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const media = (key: keyof typeof breakpoints) =>
  `@media (min-width:${breakpoints[key]}px)`;

// Kiểu sx: có thể là object hoặc function(theme)
export type SxProps =
  | React.CSSProperties
  | ((theme: ReturnType<typeof useTheme>) => React.CSSProperties);

export const useSxStyles = (sx?: SxProps): React.CSSProperties => {
  const theme = useTheme();

  if (!sx) return {};

  const sxObject = typeof sx === "function" ? sx(theme) : sx;

  const css: Record<string, any> = {};

  Object.entries(sxObject).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.entries(value).forEach(([breakpoint, bpValue]) => {
        if (breakpoint === "xs") {
          css[key] = bpValue;
        } else {
          const mediaRes = media(breakpoint as any);
          css[mediaRes] = {
            ...css[mediaRes],
            [key]: bpValue,
          };
        }
      });
    } else {
      css[key] = value;
    }
  });

  return css;
};
