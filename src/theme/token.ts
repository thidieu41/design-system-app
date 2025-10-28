export const colors = {
  primary: {
    light: "#64b5f6", // xanh dương nhạt
    main: "#1976d2", // xanh dương chính
    dark: "#0d47a1", // xanh dương đậm
    contrastText: "#ffffff",
    hover:"#1565c0"
  },
  secondary: {
    light: "#ff4081", // hồng nhạt
    main: "#f50057", // hồng chính
    dark: "#c51162", // hồng đậm
    contrastText: "#ffffff",
    hover: "#b9154fff",
  },
  success: {
    light: "#81c784", // xanh lá nhạt
    main: "#4caf50", // xanh lá chính
    dark: "#388e3c", // xanh lá đậm
    contrastText: "#ffffff",
    hover:"#1b5e20"
  },
  warning: {
    light: "#ffb74d", // cam nhạt
    main: "#ff9800", // cam chính
    dark: "#f57c00", // cam đậm
    contrastText: "#000000",
    hover: "#e65100",
  },
  error: {
    light: "#e57373", // đỏ nhạt
    main: "#f44336", // đỏ chính
    dark: "#d32f2f", // đỏ đậm
    contrastText: "#ffffff",
    hover: "#b71c1c"
  },
  gray: {
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
};

export const spacing = (factor: number) => `${0.25 * factor}rem`;

export const typography = {
  fontFamily: "'Comic Sans MS', sans-serif",
  fontSize: 14,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};
