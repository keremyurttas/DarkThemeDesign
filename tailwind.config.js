/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-section": "url(/src/assets/ImageBackground.svg)",
        grid: "url(/src/assets/Grid.svg)",
        footer: "url(/src/assets/Vector1.svg)",
      },
      backgroundColor: {
        primary: "#000b27",
      },
      fontFamily: {
        kumbh: "Kumbh Sans, sans-serif",
      },
      textColor: {
        secondary: "#A8ADB3",
        tertiary: "#67687A",
      },
      borderColor: {
        primary: "#464548",
      },
    },
  },
  plugins: [],
};
