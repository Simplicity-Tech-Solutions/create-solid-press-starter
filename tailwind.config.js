/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // https://tailwindcss.com/docs/content-configuration
    "./src/**/*.{js,jsx,ts,tsx}",
    './*.php',
    './inc/**/*.php',
    './templates/**/*.php',
    './safelist.txt'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

