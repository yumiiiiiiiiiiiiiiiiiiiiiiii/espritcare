/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.{html,js}",
    "./src/**/*.{html,js,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      colors: {
        primary: "#2563eb",     // Bleu principal utilisé dans le projet
        brand: {
          DEFAULT: "#3A8DFF",
          dark: "#2563EB"
        },
        danger: "#dc2626",
        success: "#059669",
        purple: "#9333ea",
        header: "#404347"
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px"
      }
    }
  },
  plugins: []
};