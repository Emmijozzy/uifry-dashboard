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
        darkdangerbg: "#580909ad",
        lightdangerbg: "#f96161ad",
        lightbg: "#ccc",
        lightbg2: "#92b1d3",
        darksuccessbg: "#095820ad",
        lightsuccessbg: "#61f98dad",
        success: "#02b154",
        danger: "#e41414",
        darktext: "#fff",
        darktext2: "#A6A6A6",
        lighttext: "#141332",
        lighttext2: "#213b62"
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
  corePlugins: {
    placeholdColor: true
  }
}

