/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      primary: "#0A2647",
      background: "#FFFFFF",
      accent: "#DDDDDD",
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

