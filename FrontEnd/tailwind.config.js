/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            // => @media (min-width: 640px) { ... }
       "md":'500px',
        "sd":'300px',
        "sdd":"400px",       

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      
    },
  },
  plugins: [ require('daisyui'),
  ],
}