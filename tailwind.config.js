/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '2.5rem',
          md: '3rem',
          lg: '4rem',
        },
      },
    },
    plugins: [],
  }
}

