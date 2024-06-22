/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlowCondensed: ["'Barlow Condensed'", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    colors: {
      navy: "#0B0D17",
      lightBlue: "#D0D6F9",
      white: "#ffffff",
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    fontSize: {
      SubLarge: "28px",
      SubSmall: "14px",
      extraLarge: "80px",
      large: "56px",
      medium: "24px",
      small: "18px",
      extraSmall: "16px",
      nav: "14px",
      body: "15px",
    },
    extend: {
      fontSize: {
        "tablet-large": "80px",
        "tablet-medium": "40px",
        "tablet-small": "24px",
        "tablet-extraSmall": "20px",
        "tablet-body": "16px",
        "desktop-extraLarge": "144px",
        "desktop-large": "96px",
        "desktop-medium": "56px",
        "desktop-small": "32px",
        "desktop-extraSmall": "28px",
        "desktop-nav": "16px",
        "desktop-body": "18px",
      },
    },
  },
  plugins: [],
};
