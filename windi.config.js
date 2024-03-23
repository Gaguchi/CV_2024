export default {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }},
  },
  extract: {
    include: ['**/*.{jsx,tsx}'], // Add your file extensions here
  },
  plugins: [],
}