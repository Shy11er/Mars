/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js, jsx, tsx, ts}",
    "./components/**/*.{html,js, jsx, tsx, ts}",
    "node_modules/flowbite-react/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#191624",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
