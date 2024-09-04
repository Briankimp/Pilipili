import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#244747",
        },
        black: {
          100: "#000000",
        },
        white: {
          100: "#fff6e4",
        },
        btn: {
          red: "#d93430",
          yellow: "#ff811a",
          orange: "#ffde59",
        },
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
      },
      // Uncomment and use as needed
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};

export default config;
