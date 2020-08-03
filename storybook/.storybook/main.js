const path = require('path')

function getPkgFolder(folderName) {
  return path.resolve('..', 'packages', folderName)
}

function includePkg(rule, folderName) {
  const pkgFolder = getPkgFolder(folderName)

  rule.include.push(pkgFolder)
  rule.exclude.push(path.join(pkgFolder, 'node_modules'))
}

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

    const folders = ['components', 'icons']

    folders.forEach((folderName) => {
      includePkg(babelRule, folderName)
    })

    return config
  },
}
