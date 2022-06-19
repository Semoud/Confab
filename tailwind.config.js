/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"GeneralSans-Medium"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				crayola: '#FB554C',
				smoke: '#4E4F51',
				stormy: '#323334',
				opal: '#8DBAB5',
				cloudy: '#F5F4F3',
			},
		},
	},
	plugins: [],
};
