import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
    colors: {
      green: {
        100: "#244747",
      },
      black: {
        100: "#000000", // Fixed color code
      },
      bg: "#fff6e4", // Fixed extra space
      btn: {
        red: "#d93430",
        yellow: "#ff811a",
        orange: "#ffde59",
      },
    },
    fontFamily: {
      primary: ["Nunito", "sans-serif"], // Ensure 'Nunito' is used in your global CSS
    },
  },
  plugins: [],
};

export default config;
