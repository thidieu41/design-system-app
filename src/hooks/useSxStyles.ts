// src/hooks/useSxStyles.ts
import { useTheme } from '../theme/ThemeProvider';
import React from 'react';

// Kiểu sx: có thể là object hoặc function(theme)
export type SxProps =
  | React.CSSProperties
  | ((theme: ReturnType<typeof useTheme>) => React.CSSProperties);

export const useSxStyles = (sx?: SxProps): React.CSSProperties => {
  const theme = useTheme();

  if (!sx) return {};

  if (typeof sx === 'function') {
    return sx(theme);
  }

  return sx;
};
