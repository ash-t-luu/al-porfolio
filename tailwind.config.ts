import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        highlight: '#8b5cf6',
        secondHighlight: '#10b981',
        light: '#f5f5f5',
      },
      screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
      animation: {
        bounce: "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
      },
      keyframes: {
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
