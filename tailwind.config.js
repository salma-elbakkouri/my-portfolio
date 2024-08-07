// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: 'class',
//     content: [
//         "./src/**/*.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//         extend: {
//             animation: {
//                 'background-grid': 'moveGrid 5s linear infinite',
//             },
//             keyframes: {
//                 moveGrid: {
//                     '0%': { transform: 'translateY(0)' },
//                     '100%': { transform: 'translateY(-100%)' },
//                 },
//             },
//             colors: {
//                 dark: '#404658',
//                 lightGray: '#F0F0F0',
//             },
//         },
//     },
//     plugins: [],
//   };
  

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: '#404658',
          lightGray: '#f0f0f0',
          midGray: '#d1d1d1',
          darkGray: '#666666',
          blackDark : '#141414',
          grayBlue : '#C5C9DC',
          yellow : '#A7A700',
          lightBlue : '#82aceb',
          darkBlue : '#14232c',
          veryDark : '#0C161C',
          cardColor : '#343840',
          cardSelectedColor : '#436BA8',
        },
        backgroundImage: {
          'light-gradient': 'linear-gradient(to bottom, #f0f0f0, #d1d1d1)',
          'dark-gradient': 'linear-gradient(to bottom, #404658, #666666)',
        },
      },
    },
    plugins: [],
  };
  