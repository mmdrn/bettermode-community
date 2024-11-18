/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "Arial", "sans-serif"],
        "geist-mono": ["Geist Mono", "Roboto"],
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
