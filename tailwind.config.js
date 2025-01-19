/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: '#011627',
      'dark-bg': '#1a2d3c',
      'dark-text': '#dddedf',
      white: '#F6F7F8',
      orange: '#FF6A53',
      'dark-orange': '#CC5442',
      blue: '#587291',
      'dark-blue': '#465B74',
      green: '#739E82',
      'dark-green': '#5c7e68',
      grey: '#64717F',
    },
  },
  plugins: [],
  darkMode: 'selector',
};
