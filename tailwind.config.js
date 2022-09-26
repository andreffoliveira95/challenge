/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'nokia-blue': '#00439c',
				'light-white': 'rgba(255, 255, 255, 0.17)',
				'light-gray': '#f9fafb',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
