import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    background-color: grey;
    font-family: sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    // The line-height is determined by dividing the targeted line-height size by the font-size,
    // where the target line-height is 20px and the font-size is 14px:
    line-height: 1.428571429;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

const preview: Preview = {
  parameters: {
    staticDirs: ['../public'],
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
