/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary:    "#d133e9",   
        secondary:  "#4b1d6f",  
        lightpink: "#fcd7f1" ,   
        dark:       "#160820",   
        background: "#1a103d",    

      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #4b1d6f, #1a103d)',
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        Imperial: ["Imperial Script", "cursive"],
      },
    },
  },
  plugins: [],
}

