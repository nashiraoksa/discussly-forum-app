/** @type { import('@storybook/react').Preview } */
import '../src/index.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark', // Set your default background here
      values: [
        { name: 'dark', value: '#373F51' }, // Set your custom background color
        { name: 'light', value: '#FFFFFF' }, // Optionally add a light background
      ],
    },
  },
};

export default preview;
