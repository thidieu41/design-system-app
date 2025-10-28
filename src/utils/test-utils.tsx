import { render } from "@testing-library/react";
import { ThemeProvider } from "../theme/ThemeProvider";
import React from "react";

const AllProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, option = {}) =>
  render(ui, {
    wrapper: AllProvider,
    ...option,
  });

export * from "@testing-library/react";
export { customRender as render };
