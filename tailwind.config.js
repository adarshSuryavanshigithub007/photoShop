export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        dark: {
          900: '#0F0F11',
          800: '#18181B',
          700: '#27272A',
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(15, 15, 17, 0.8), rgba(0, 0, 0, 0.9)), url('/img/hero.png')",
      }
    },
  },
  plugins: [],
}
