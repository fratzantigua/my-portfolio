/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        primaryDark: '#2563eb',
        primaryLight: '#60a5fa',
        secondary: '#6b7280',
        secondaryDark: '#4b5563',
        accent: '#f97316',
        dark: '#111827',
        light: '#f9fafb',
        background: '#f3f4f6',
        card: '#ffffff',
        muted: '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
      },
    },
  },
  plugins: [],
}
