/** @type {import('tailwindcss').Config} */
// module.exports = {
//  content: [
//    "./app/**/*.{js,ts,jsx,tsx}",
//    "./pages/**/*.{js,ts,jsx,tsx}",
//    "./components/**/*.{js,ts,jsx,tsx}",
//  ],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}

module.exports = {
	mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		fontFamily: {
			sans: ['Public Sans', 'sans-serif'],
			serif: ['Ibarra Real Nova', 'serif'],
		},
		fontSize: {
			xxxs: '10px',
			xxs: '12px',
			xs: '15px',
			sm: '16px',
			md: '32px',
			lg: '40px',
			xl: '50px',
		},
		screens: {
      sm: '640px',
			md: '768px',
			lg: '976px',
			xl: '1110px',
			xxl: '1190px',
		},
		extend: {
			colors: {
				myCyan: {
					500: '#5FB4A2',
				},
				myBlue: {
					200: '#659BBF',
					400: '#154B6F',
					700: '#203A4C',
				},
				myGrey: {
					100: '#EAEAEB',
					300: '#D7D7D7',
					700: '#979797',
					900: '#33323D',
				},
				myRed: {
					600: '#F43030',
				},
				myGreen: {
					300: '#606C38',
				}
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}


