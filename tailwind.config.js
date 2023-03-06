/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["HKGrotesk", "sans-serif"],
      },
      colors: {
        action: {
          success: "#34B53A",
          primary: "#4339F2",
          danger: "#FF3A29",
          info: "#02A0FC",
          warning: "#FFB200",
        },
        light: {
          success: "#E2FBD7",
          primary: "#DAD7FE",
          danger: "#FFE5D3",
          info: "#CCF8FE",
          warning: "#FFB200",
        },
      },
    },
  },
  plugins: [],
};
