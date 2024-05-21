// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js"
],
  theme: {
    extend: {
      // ...
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
      // ...
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};