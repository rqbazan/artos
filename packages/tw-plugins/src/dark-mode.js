import plugin from 'tailwindcss/plugin'
import lodash from 'lodash'

export default plugin(({ addVariant, e }) => {
  function addDarkModeVariant(name) {
    const pseudoClass = lodash.nth(name.split('-'), 1)

    addVariant(name, ({ modifySelectors, separator: s }) => {
      modifySelectors(({ className }) => {
        const fullClassName = lodash(['dark', pseudoClass, className]).filter(Boolean).join(s)
        const pseudoSelector = pseudoClass ? `:${pseudoClass}` : ''

        return `[data-theme="dark"] .${e(fullClassName)}${pseudoSelector}`
      })
    })
  }

  addDarkModeVariant('dark')
  addDarkModeVariant('dark-hover')
  addDarkModeVariant('dark-active')
})
