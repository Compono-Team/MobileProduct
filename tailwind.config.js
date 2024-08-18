/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {colors: {black: '#1c1d1f'}},
  },
  plugins: [],
};
