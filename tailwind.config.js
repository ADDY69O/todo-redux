/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your colors here
        general: '#3490dc',   // Example color for 'General'
        urgent: '#ff0000',    // Example color for 'Urgent'
        work: '#ffb400',      // Example color for 'Work'
        home: '#00cc66',      // Example color for 'Home'
        learning: '#9966cc',  // Example color for 'Learning'
        travel: '#ff9900',    // Example color for 'Travel'
      },
    },
  },
  plugins: [],
}

