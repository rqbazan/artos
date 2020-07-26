const path = require('path')
const prettier = require('prettier')
const { camelCase, capitalize } = require('lodash')
const prettierOptions = require('./.prettierrc.json')

function indexTemplate(filePaths) {
  const source = filePaths
    .map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath))
      const componentName = `Svg${capitalize(camelCase(basename))}`

      return `export { default as ${componentName} } from './${basename}'`
    })
    .join('\n')

  return prettier.format(source, prettierOptions)
}

module.exports = {
  indexTemplate,
  typescript: true,
  icon: true,
  dimensions: false,
  filenameCase: 'kebab',
  svgoConfig: {
    plugins: [{ prefixIds: false }],
  },
}
