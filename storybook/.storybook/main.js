const path = require('path')

function isBabel(use) {
  if (!Array.isArray(use)) {
    return use.loader === 'babel-loader'
  }

  return use.some(isBabel)
}

module.exports = {
  stories: ['../**/*.stories.(tsx|mdx)'],
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
  webpackFinal: (config) => {
    // prettier-ignore
    const babelRule = config
      .module
      .rules
      .find((rule) => isBabel(rule.use));

    if (babelRule) {
      babelRule.include.push(path.resolve('../packages'))
    }

    return config
  },
}
