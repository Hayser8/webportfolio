/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gradientStart: '#374151',
        gradientEnd: '#1F2937',
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
      },
      keyframes: {
        slideInFromRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInWithOpacity: {
          "0%": { opacity: 0},
          "100%": { opacity: 0.8 },
        },
      },
      animation: {
        fadeIn: "fadeIn 3s ease-out",
        fadeInWithOpacity: "fadeInWithOpacity 3s ease-out forwards",
        slideInFromRight: 'slideInFromRight 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
