/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF5FF',
          100: '#D6EBFF',
          200: '#ADD6FF',
          300: '#84C1FF',
          400: '#5BABFF',
          500: '#4A90E2',
          600: '#3B73B4',
          700: '#2C5687',
          800: '#1D3A59',
          900: '#0E1D2C',
        },
        secondary: {
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE299',
          300: '#FFD466',
          400: '#FFC533',
          500: '#F5A623',
          600: '#C4851C',
          700: '#936415',
          800: '#62420E',
          900: '#312107',
        },
        accent: {
          50: '#F2FBEB',
          100: '#E5F7D7',
          200: '#CBF0AF',
          300: '#B1E887',
          400: '#97E15F',
          500: '#7ED321',
          600: '#65A91A',
          700: '#4C7F14',
          800: '#32550D',
          900: '#192A07',
        },
        success: {
          500: '#2ECC71',
          600: '#27AE60',
        },
        warning: {
          500: '#F5A623',
          600: '#F39C12',
        },
        error: {
          500: '#E74C3C',
          600: '#C0392B',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};