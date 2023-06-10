const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-designs'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
  },
  features: {
    storyStoreV7: true,
  },
};
