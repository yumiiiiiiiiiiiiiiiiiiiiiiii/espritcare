/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}"  // On garde les deux chemins pour être sûr de couvrir tous les fichiers
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        inter: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"]
        // Les deux sont similaires, on peut garder les deux ou juste une
      },
      colors: {
        primary: "#2563eb",     // ou "#3A8DFF" → choisis celle utilisée dans ton projet
        danger: "#dc2626",
        success: "#059669",
        purple: "#9333ea",
        header: "#404347",
        brand: {
          DEFAULT: "#3A8DFF",
          dark: "#2563EB",
        }
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
      }
    },
  },
  plugins: [],
}