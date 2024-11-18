/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        monospace: ["monospace"],
      },
      colors: {
        bettermode: {
          green: {
            primary: "#46CB19",
          },
        },
      },
    },
  },
  plugins: [],
};
