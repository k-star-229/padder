module.exports = {
	content: [
		"../../packages/kl-core/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"*",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2D384C",
				secondary: "#FDBD4E",
			},
		},
	},
	plugins: [],
}
