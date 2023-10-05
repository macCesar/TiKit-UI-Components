module.exports = {
  purge: {
    mode: 'all',
    options: {
      legacy: false,
      missing: true,
      widgets: false,
      safelist: [],
      plugins: []
    },
    method: 'sync'
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f6f7',
          100: '#e3e7ea',
          200: '#cbd2d6',
          300: '#a6b3ba',
          400: '#7a8b96',
          500: '#5f707b',
          600: '#515e69',
          700: '#465058',
          800: '#3e454c',
          900: '#373c42',
          default: '#5f707b'
        },
        secondary: {
          50: '#f6faeb',
          100: '#ebf2d5',
          200: '#d8e7af',
          300: '#bdd680',
          400: '#a3c457',
          500: '#8fb63e',
          600: '#66862a',
          700: '#4f6724',
          800: '#405222',
          900: '#384720',
          default: '#8fb63e'
        }
      }
    },
    fontFamily: { mono: 'FiraCode-Light', 'mono-medium': 'FiraCode-Medium' }
  }
}
