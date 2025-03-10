/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        jakartaBold: ["PlusJakartaSansBold", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
        jakartaSemiBold: ["PlusJakartaSansSemiBold", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
        jakartaReguler: ["PlusJakartaSansReguler", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
        jakartaLight: ["PlusJakartaSansLight", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
      colors: {
        primary: "#323232",
        menuColor: "#e6e7eb",
        footerColor: "#112b50",
      },
    },
  },
  plugins: [],
};
