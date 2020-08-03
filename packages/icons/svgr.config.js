const path = require('path')
const { camelCase, upperFirst } = require('lodash')

const pascalCase = (v) => upperFirst(camelCase(v))

function indexTemplate(filePaths) {
  return filePaths
    .map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath))
      const componentName = `Svg${pascalCase(basename)}`

      return `export { default as ${componentName} } from './${basename}'`
    })
    .join('\n')
    .concat('\n') // extra new line at the EOF
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
