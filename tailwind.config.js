/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          p: "rgb(49, 203, 214)",
          para: "rgb(150, 213, 218)",
          h1: "rgb(81, 204, 212)",
          h2: "gb(14, 199, 212)",
        },
        blue: {
          dark: "#040d21",
          bg:"rgba(73, 93, 146, 0.1)",
          light:"#05274b"
        },
      },
    },
  },
  plugins: [],
}

