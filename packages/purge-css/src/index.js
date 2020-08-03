const path = require('path')
const fs = require('fs')
const esprima = require('esprima')
const kebab = require('lodash.kebabcase')
const appRoot = require('app-root-path')
const glob = require('glob-all')
const debug = require('debug')('artos:purge')

/**
 * @param {String[]} source
 * @param {Map<string, boolean>} memo
 */
function getContentPaths(source, memo) {
  const ast = esprima.parseModule(source, { jsx: true })

  const pkgs = ['@artos/components', '@artos/icons']

  const isArtosImport = (node) => node.type === 'ImportDeclaration' && pkgs.includes(node.source.value)

  const imported = ast.body
    .filter(isArtosImport)
    .map((node) => {
      const pkg = node.source.value

      const getKey = (name) => `${pkg}__${name}`

      const imported = node.specifiers
        .map(({ imported: { name } }) => (pkg === '@artos/icons' ? name.replace('Svg', '') : name))
        .filter((name) => !memo.has(getKey(name)))

      imported.forEach((name) => {
        memo.set(getKey(name), true)
      })

      return { imported, pkg }
    })
    .filter(({ imported }) => imported.length)

  debug('imported %O', imported)

  const files = imported.reduce((acc, curr) => {
    const basepath = appRoot.resolve(curr.pkg.replace('@artos', 'packages'))
    const toPath = (importName) => path.join(basepath, 'src', kebab(importName))

    return acc.concat(curr.imported.map(toPath))
  }, [])

  debug('files %O', files)

  const filesWithExt = files.map((filepath) => {
    try {
      fs.statSync(filepath).isDirectory()
      return path.join(filepath, 'index.tsx')
    } catch (error) {
      return `${filepath}.tsx`
    }
  })

  debug('complete %O', filesWithExt)

  return filesWithExt
}

/**
 * @param {string[]} patterns
 */
function content(patterns) {
  const files = glob.sync(patterns)

  const memo = new Map()

  const contentPaths = files.reduce((accum, file) => {
    const filepath = path.join(process.cwd(), file)
    const source = fs.readFileSync(filepath).toString('utf-8')

    return accum.concat(getContentPaths(source, memo))
  }, [])

  return patterns.concat(contentPaths)
}

module.exports = {
  getContentPaths,
  content,
}
