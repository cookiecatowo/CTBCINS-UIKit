import '../src/assets/index.css';
import { withThemeByDataAttribute } from "@storybook/addon-themes";

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
        // nameOfTheme: 'dataAttributeForTheme',
        light: '',
        dark: 'dark',
    },
    defaultTheme: 'light',
    dataAttribute: 'data-theme',
})];

export default preview;
