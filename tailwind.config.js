/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#59b0ff',
          500: '#328dff',
          600: '#1b6cf5',
          700: '#1455e1',
          800: '#1746b6',
          900: '#193f8f',
          950: '#142857',
        },
        ink: {
          900: '#0b1220',
          800: '#111a2e',
          700: '#1a2740',
          600: '#26354f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(50,141,255,0.15), 0 10px 40px -12px rgba(27,108,245,0.45)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'flip-in': {
          '0%': { opacity: '0', transform: 'rotateY(-90deg)' },
          '100%': { opacity: '1', transform: 'rotateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'flip-in': 'flip-in 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
