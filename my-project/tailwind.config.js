/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-2': '#DDC7BB',
        'custom-pink': '#fecaca', // Define your custom color
      },
      screens: {
        'sm': '640px',    // Small devices (phones)
        'md': '768px',    // Tablets (portrait mode)
        'lg': '1024px',   // Tablets (landscape mode)
        'xl': '1280px',   // Larger devices
        '2xl': '1536px',  // Extra large screens
        // Adding custom breakpoints for specific devices like iPad:
        'ipad': '820px',  // Custom iPad breakpoint (can be adjusted based on needs)
        'ipad-landscape': '1024px', // iPad landscape mode
      },
    },
  },
  plugins: [],
}


