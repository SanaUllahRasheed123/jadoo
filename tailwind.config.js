/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Volkhov: ["Volkhov"],
      Poppins: ["Poppins"],
      Sans: ["sans-serif"],
    },
    colors: {
      "new-yellow": "#F1A501",
    },

    extend: {
      screens: {
        xs: "340px",
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1400px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/Group 4.png')",
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.purple.200"), 0 0 20px theme("colors.purple.700")',
      },
    },
  },
  plugins: [],
};
