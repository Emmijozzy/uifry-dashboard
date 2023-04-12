/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6359c9",
        secondary: "#64cff6",
        darkbg: "#141332",
        darkbg2: "#1d1d41",
        lightbg: "#ccc",
        lightbg2: "#92b1d3",
        success: "#02b154",
        danger: "#e41414",
        darktext: "#fff",
        darktext2: "#A6A6A6",
        lighttext: "#141332"
      },
      fontFamily: {
        primary: ["General Sans", "sans-serif"],
        secondary: ["Cera-Pro", "sans-serif"],
        tertiary: ["SF-Pro", "sans-serif"],
      },
    },
    // screens: {
    //   sm: "380px",
    //   md: "1060px",
    //   lg: "1200px",
    //   xl: "1700px",
    // },
  },
  plugins: [],
}

