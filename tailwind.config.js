/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: [
    "./pages/**/*.{html,js}",
    "./*.html",
    "./src/**/*.{html,js,scss}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
=======
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#2563eb',
        danger: '#dc2626',
        success: '#059669',
        purple: '#9333ea',
        header: '#404347',
>>>>>>> origin/Communication
      },
    },
  },
  plugins: [],
}