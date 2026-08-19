/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        lilac: {
          purple: '#C7B5F5',
          light: '#EDE7FB',
          mist: '#F6F4FE',
        },
        dusty: {
          purple: '#7E6BB3',
        },
        deep: {
          plum: '#282740',
        },
        success: {
          green: '#00C853',
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};