module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"dark-50": "rgb(0 0 0 / 40%)",
				primary: "#0097a0",
				"p-purple-800": "#110844",
				"p-purple-400": "#6D60EF",
			},
			lineHeight: {
				54: "54px",
			},
			boxShadow: {
				1: "0px 2px 10px 2px rgb(0 0 0 / 0.1)",
			},
		},
	},
	plugins: [],
}
