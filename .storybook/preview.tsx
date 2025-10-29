import type { Preview } from "@storybook/react-webpack5";
import { ThemeProvider } from "../src/theme/ThemeProvider";

import "../src/index.css";
import { css, Global } from "@emotion/react";

const preview: Preview = {
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f9fafb" },
        { name: "dark", value: "#121212" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
