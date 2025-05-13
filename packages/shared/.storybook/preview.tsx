import type { Preview } from "@storybook/react";
import { defaultThemeClasses } from "../src/styles/theme/color.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={defaultThemeClasses}>
      <Story />
    </div>
  ),
];

export default preview;
