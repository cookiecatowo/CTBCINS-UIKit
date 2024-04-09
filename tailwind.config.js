const animate = require("tailwindcss-animate")
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#037E80',
        alert: '#F63A3A',
        border: '#CECECE',
        label: '#929292',
        inputDisabled: '#F2F3F5',
        btnDisabled: '#D7D7D7',
        btnDisabledText: '#838383',
        textDisabled: '#CECECE',
        tableHead: '#3B3B3B',
        tooltip: '#ACACAC',
        pagination: '#8F8F8F',
        radio: '#F05C37',
        white: '#FFFFFF',
        black: '#1E1E1E',
        red: '#EF3123',
        transparent: 'transparent',
        background: '#FFFFFF',
      },
      fontSize: {
        32: '32px',
        28: '28px',
        24: '24px',
        22: '22px',
        18: '18px',
      },
      scale: {
        '115': '1.15',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
}