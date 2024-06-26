import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '15px',
    },

    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },

    fontFamily:{
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)'
    },

    backgroundImage: {
      hero: 'url(/images/Karate.jpg)',
      quote: 'url(/images/judo.jpg)'
    },

    extend: {
      colors: {
        primary:{
          default: 'white'
        }
      }
    },
  },
  plugins: [],
};
export default config;
