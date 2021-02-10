module.exports = {
  darkMode: 'media',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      textOpacity: ['dark'],
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {},
  plugins: [],
};
