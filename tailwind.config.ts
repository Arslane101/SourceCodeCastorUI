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
        'castor-brown': '#6D4C41',
        'maple-red': '#D80621',
        'clean-white': '#FFFFFF',
        'shield-blue': '#0032A0',
        'forest-green': '#00573F',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'playlist': ['Playlist Script', 'cursive'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;