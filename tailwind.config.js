/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.{tsx,ts}', './src/components/**/*.{tsx,ts}'],
	theme: {
		extend: {
			colors: {
				'navy-100': '#d4cce6',
				'navy-200': '#a999cd',
				'navy-300': '#7d66b4',
				'navy-400': '#52339b',
				'navy-500': '#270082',
				'navy-600': '#1f0068',
				'navy-700': '#17004e',
				'navy-800': '#100034',
				'navy-900': '#08001a',
				'pink-100': '#e4cef2',
				'pink-200': '#ca9de6',
				'pink-300': '#af6dd9',
				'pink-400': '#953ccd',
				'pink-500': '#7a0bc0',
				'pink-600': '#62099a',
				'pink-700': '#490773',
				'pink-800': '#31044d',
				'pink-900': '#180226',
				'pink-100': '#fedef0',
				'pink-200': '#fdbce2',
				'pink-300': '#fc9bd3',
				'pink-400': '#fb79c5',
				'pink-500': '#fa58b6',
				'pink-600': '#c84692',
				'pink-700': '#96356d',
				'pink-800': '#642349',
				'pink-900': '#321224',
				'black-100': '#d1d1d9',
				'black-200': '#a3a3b3',
				'black-300': '#76768c',
				'black-400': '#484866',
				'black-500': '#1a1a40',
				'black-600': '#151533',
				'black-700': '#101026',
				'black-800': '#0a0a1a',
				'black-900': '#05050d',
			},
		},
	},
	plugins: [],
};
