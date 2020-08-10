const { shadowColorPlugin, darkModePlugin } = require('@artos/tw-plugins')

module.exports = {
  purge: ['../packages/**/*.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#46E5C9',
          soft: '#BEFFF5',
        },
        secondary: {
          default: '#E57FFF',
          soft: '#EEABFF',
        },
        night: {
          default: '#160D4A',
          soft: '#2D0D55',
        },
        smoke: {
          100: '#F4F3F3',
          200: '#DFDFDF',
          300: '#B1BED5',
          400: '#8691A3',
        },
      },
      boxShadow: {
        button: '2.5px 2.5px 0px var(--shadow-color)',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"'],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'dark-active'],
    shadowColor: ['dark'],
  },
  plugins: [shadowColorPlugin, darkModePlugin],
}
