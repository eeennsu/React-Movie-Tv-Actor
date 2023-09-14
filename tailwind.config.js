/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: {
            DEFAULT: '#27374D'
        },
        dark2: {
          DEFAULT: '#526D82'
        },
        dark3: {
          DEFAULT: '#9DB2BF'
        },
        nDark: {
          DEFAULT: '#DDE6ED'
        }
      },
      screens: {
        '2xs': '320px',
        'xs': '400px',
      },
      height: {
        58: '232px',
        62: '248px',
        68: '272px',
        76: '304px',
        82: '328px',
        84: '336px',
        86: '344px',
        88: '352px',
        90: '360px',
        92: '368px',
        94: '376px',
      },
      translate: {
        
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        7: '7px'
      },
    },
  },
  plugins: [
        require('@tailwindcss/line-clamp'), 
        require('daisyui'), 
        require('@tailwindcss/typography'), 
        //require('rippleui'), 
        require('@tailwindcss/forms'),
  ],
}

