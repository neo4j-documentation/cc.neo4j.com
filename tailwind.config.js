const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            "sans": ['"Open Sans"', ...defaultTheme.fontFamily.sans],
            "serif": ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
            "mono": ['"Fira Code"', ...defaultTheme.fontFamily.mono],
            "neo4j": ['HurmeGeometricSans2', ...defaultTheme.fontFamily.sans]
          },
        colors: {
          gray: {
            darkest: '#1f2d3d',
            dark: '#3c4858',
            DEFAULT: '#c0ccda',
            light: '#e0e6ed',
            lightest: '#f9fafc',
          }
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
