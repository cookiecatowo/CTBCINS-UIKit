/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        main: '#037E80',
        alert: '#F63A3A',
        border: '#CECECE',
        inputDisabled: '#F2F3F5',
        btnDisabled: '#D7D7D7',
        btnDisabledText: '#838383',
        textDisabled: '#CECECE',
        tableHead: '#3B3B3B',
        tooltip: '#ACACAC',
        radio: '#F05C37',
        white: '#FFFFFF',
        black: '#1E1E1E',
        red: '#EF3123',
        transparent: 'transparent',
      },
      fontFamily: {
        'sans': ['"PingFang TC"', '"Noto Sans TC"', 'Arial']
      },
    },

  },
  plugins: [],
}

