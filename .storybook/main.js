const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    'storybook-addon-paddings',
  ],
  webpackFinal: config => {
    const tsConfigPathsPlugin = new TsconfigPathsPlugin()

    if (config.resolve.plugins) {
      config.resolve.plugins.push(tsConfigPathsPlugin)
    } else {
      config.resolve.plugins = [tsConfigPathsPlugin]
    }

    return config
  },
}
