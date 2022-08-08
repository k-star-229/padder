const withTM = require("next-transpile-modules")(["kl-core"])

module.exports = withTM({
	reactStrictMode: false,
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
	images: {
		domains: [
			"ui-avatars.com",
			"lh3.googleusercontent.com",
			"firebasestorage.googleapis.com",
		],
	},
})
