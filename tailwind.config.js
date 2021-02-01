const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            "sans": ['"Open Sans"', ...defaultTheme.fontFamily.sans],
            "serif": ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
            "mono": ['"Fira Code"', ...defaultTheme.fontFamily.mono],
            "neo4j": ['HurmeGeometricSans2', ...defaultTheme.fontFamily.sans]
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
