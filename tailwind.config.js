/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Bellefair: ["Bellefair", "serif"],
      Barlow_C: ['"Barlow Condensed"', "sans-serif"],
      Barlow: ["Barlow", "sans-serif"],
    },
    colors: {
      Navy: "#0B0D17",
      LBlue: "#D0D6F9",
    },
    fontSize: {
      xl: "144px",
      l: "100px",
      m: "56px",
      s: "32px",
      xs: "28px",
      Sl: "28px",
      Ss: "16px",
      Nav: "14px",
      Body: "18px",
    },

    extend: {},
  },
  plugins: [],
};
