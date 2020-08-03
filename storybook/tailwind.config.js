const { content } = require('@artos/purge-css')

module.exports = {
  purge: content(['./src/**/*.tsx']),
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#0053FF',
          200: '#003FC2',
        },
        black: {
          default: '#000',
          100: '#F7F7F7',
          200: '#DDDDDD',
        },
      },
    },
  },
  variants: {},
}
