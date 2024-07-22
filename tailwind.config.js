// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  safelist: [
    'bg-gray-900', // Adicione as classes que você usa dinamicamente
    'text-gray-100',
    // Adicione outras classes necessárias
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        night: {
          background: '#1a202c',
          text: '#f7fafc',
        },
        day: {
          background: '#ffffff',
          text: '#000000',
        },
      },
    },
  },
  plugins: [],
}
