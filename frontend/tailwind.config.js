/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dashboard: {
          background: "#0f111a", // dark navy / near black
          card: "#1c1f2a", // card backgrounds
          text: "#e5e7eb", // light gray for main text
          subtitle: "#9ca3af", // subtle gray for subtext
          accentBlue: "#3b82f6", // vibrant blue accent
          accentRed: "#ef4444", // alerts / errors
          accentGreen: "#22c55e", // success
          accentPurple: "#a78bfa", // info or highlights
        },
      },
    },
  },
  plugins: [],
};
