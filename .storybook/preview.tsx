import type { Preview } from "@storybook/react-webpack5";
import { ThemeProvider } from "../src/theme/ThemeProvider";

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
