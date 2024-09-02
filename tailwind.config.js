/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: {
               DEFAULT: '#BDBDE0',
               hover: '#E9E9F4',
               disabled: '#727287',
            },
            accent: {
               DEFAULT: '#DB3E00',
               hover: '#D6B0D6',
            },
         },
      },
   },
   plugins: [],
};
