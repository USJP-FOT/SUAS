/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0b0b0c",  // page bg (dark mode)
          800: "#121214",  // cards
          700: "#1a1a1e",  // surfaces
          200: "#d9d9de",  // borders
          100: "#f2f2f5"   // text-subtle on light
        },
        accent: { 500: "#4da3ff" } // subtle blue like apple.com hover tint
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,.25)",
        ring: "0 0 0 1px rgba(255,255,255,.08) inset",
      },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: [],
}
