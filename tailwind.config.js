module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#64C882',
        },
        bullets: '#AAAAAA',
        avatar: '#D9D9D9',
        cardBorder: '#EAEAEA',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
};
