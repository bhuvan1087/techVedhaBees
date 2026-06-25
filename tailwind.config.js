/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        midnight: '#0b1220',
        honey: '#f5b82e',
        amberGlow: '#ffd166',
        cyanEdge: '#31d3f3',
        steel: '#94a3b8',
      },
      boxShadow: {
        premium: '0 24px 80px rgba(7, 17, 31, 0.34)',
        glow: '0 0 52px rgba(245, 184, 46, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'enterprise-gradient':
          'linear-gradient(135deg, rgba(245,184,46,0.18), rgba(49,211,243,0.13), rgba(255,255,255,0.04))',
      },
    },
  },
  plugins: [],
};
