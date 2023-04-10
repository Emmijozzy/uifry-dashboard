import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#6359c9",
        secondary: "#64cff6",
        background: "#141332",
        success: "#02b154",
        danger: "#e41414",
        text: "fff"
      },
      fontFamily: {
        primary: ["General Sans", "sans-serif"],
        secondary: ["Cera-Pro", "sans-serif"],
        tertiary: ["SF-Pro", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
} satisfies Config

