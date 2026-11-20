/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce6ff',
          300: '#8ed7ff',
          400: '#59beff',
          500: '#329fff',
          600: '#1b7ef5',
          700: '#1465e1',
          800: '#1652b6',
          900: '#184891',
          950: '#112d5c',
        },
        navy: {
          50: '#f0f5ff',
          100: '#e2ebff',
          200: '#ccd7ff',
          300: '#a7b9ff',
          400: '#7c8ffb',
          500: '#5a6bf0',
          600: '#434edf',
          700: '#373cc4',
          800: '#2f339e',
          900: '#0a1845',
          950: '#060d29',
        },
        royal: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd2ff',
          300: '#8eb4ff',
          400: '#598bff',
          500: '#3266ff',
          600: '#1a47f5',
          700: '#1636e1',
          800: '#182eb6',
          900: '#1a2c8f',
          950: '#141b5c',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'scale-in': 'scaleIn 0.4s ease-out both',
        'splash': 'splash 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        splash: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.08) rotate(5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-25%)' },
        },
      },
      backgroundImage: {
        'aqua-gradient': 'linear-gradient(135deg, #329fff 0%, #1b7ef5 50%, #1465e1 100%)',
        'navy-gradient': 'linear-gradient(135deg, #184891 0%, #0a1845 100%)',
        'aqua-radial': 'radial-gradient(ellipse at top, #8ed7ff 0%, #329fff 40%, #1652b6 100%)',
      },
    },
  },
  plugins: [],
};
