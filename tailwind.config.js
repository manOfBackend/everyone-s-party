module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamiliy:{
        'sqop':['SpoqaHanSansNeo'],
      },
      maxWidth: {
        '4/5': '80%',
      },
      colors: {
        gray: {
          gray100: '#F1F3F7',
          gray600: '#646F7C',
          gray800: '#282B30',
        },
        primary500: '#53E3AC',
      },
    },
  },
  plugins: [],
};
