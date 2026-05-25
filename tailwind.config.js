/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue:      '#1B4FA8',
          'blue-light': '#3B82F6',
          'blue-pale':  '#EFF6FF',
          green:     '#2A8A4A',
          'green-light': '#22C55E',
          'green-pale':  '#F0FDF4',
        },
        surface: '#FFFFFF',
        base: '#F8FAFF',
        border: 'rgba(15,23,42,0.08)',
      },
      boxShadow: {
        card: '0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        blue: '0 4px 24px rgba(27,79,168,0.15)',
        green:'0 4px 24px rgba(42,138,74,0.12)',
        hover:'0 8px 32px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
