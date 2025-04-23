module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        orangeTheme: {
          light: '#FFEDD5',
          DEFAULT: '#FB923C',
          dark: '#EA580C',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        slideOut: 'slideOut 0.5s ease-in',
      },
    },
  },
  plugins: [],
};