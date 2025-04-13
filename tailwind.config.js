/** @type {import('tailwindcss').Config} */
export default {
  content:[ "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards', // ✅ NEW
      },
      boxShadow: {
        fluorescent: '0 4px 6px rgba(0, 255, 255, 0.5), 0 1px 3px rgba(0, 255, 255, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      
      
    }
    
    
  },
  plugins: [],

}

