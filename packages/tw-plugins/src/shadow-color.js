import lodash from 'lodash'
import plugin from 'tailwindcss/plugin'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export default plugin(({ addUtilities, e, theme, variants }) => {
  const colors = flattenColorPalette(theme('backgroundColor'))

  const newUtilities = lodash(colors)
    .map((value, key) => {
      return [
        `.${e(`shadow-${key}`)}`,
        {
          '--shadow-color': value,
        },
      ]
    })
    .fromPairs()
    .value()

  addUtilities(newUtilities, variants('shadowColor'))
})
