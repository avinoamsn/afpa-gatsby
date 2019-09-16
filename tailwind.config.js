// eslint-disable-next-line no-undef
module.exports = {
  theme: {
    // TODO: the font-family isn't being applied
    fontFamily: {
      mont: [
        'Montserrat',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
    },
    screens: {
      // TODO: overrides all defaults (unexpected)
      xs: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // 2xl: ''
    },
    extend: {
      spacing: {},
      colors: {
        lightBlue: '#008FC3',
        darkBlue: '#242B5F',
        lighterGray: '#a4a8b2',
        lightGray: '#9B9B9B', // 979797
        darkGray: '#4A4A4A',
        backgroundGray: '#F2F2F2',
        backgroundLightGray: '#F3F5F9',
        afpaGreen: '#008560',
        textGreen: '#19AF6A',
      },
      height: {
        in: 'inherit',
        '1/2': '50%',
        '2px': '2px',
        '400': '400px',
      },
      maxHeight: {
        '200': '200px',
        '335': '335px',
        '3/4': '75vh',
      },
      minHeight: {
        '150': '150px',
        '200': '200px',
        '250': '250px',
        '400': '400px',
        '500': '500px',
      },
      width: {
        '300': '300px',
        '500': '500px',
      },
      maxWidth: {
        '2xs': '12rem',
        '1200': '1200px',
        '400': '400px',
        '425': '425px',
        '500': '500px',
        '650': '650px',
        '700': '700px',
        '1275': '1275px',
      },
      minWidth: {
        '91': '91px',
        '120': '120px',
        '200': '200px',
        '300': '300px',
        '450': '450px',
      },
      fontSize: {
        '7xl': '4.5rem',
      },
      inset: {
        '100': '100px',
        full: '100%',
        '3/4': '75%',
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/6': '16%',
        '15': '15%',
        '1/10': '10%',
        '1/20': '5%',
      },
    },
  },
  variants: {},
  plugins: [],
}
