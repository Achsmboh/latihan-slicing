/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        biru: "#19345E",
        biruMuda: "#E7EBFC",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
