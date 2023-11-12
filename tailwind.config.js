/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx, jsx, ts, js}"],
	theme: {
		extend: {
			textColor: {
				'primary': '#b8c1ec',
				'secondary': '#232946',
				'title-color': '#fffffe',
				'btn-color': '#232946',
				'secondary-active': '#fffffe',
				'primary-active': '#eebbc3'
			},
			backgroundColor: {
				'body-bg': '#232946',
				'button-bg': '#eebbc3',
				'header-bg': '#eebbc3',
				'sidebar': '#b8c1ec'
			}
		},
	},
	plugins: [],
}

