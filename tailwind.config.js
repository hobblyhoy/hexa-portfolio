/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   safelist: [
      'bg-opacity-20',
      'bg-opacity-15',
      'bg-opacity-10',
      'bg-opacity-5',
      'bg-opacity-0',
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               DEFAULT: '#BDBDE0',
               hover: '#E9E9F4',
               disabled: '#727287',
            },
            accent: {
               DEFAULT: '#E75920',
               hover: '#D6B0D6',
            },
         },
      },
   },
   plugins: [],
};
