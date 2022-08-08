module.exports = {
	extends: ["next", "prettier"],
	settings: {
		next: {
			rootDir: ["apps/*/", "packages/*/"],
		},
	},
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		semi: "off",
		"no-console": "error",
		"react-hooks/exhaustive-deps": "off",
		"max-len": [
			"error",
			120,
			{
				ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
				ignoreUrls: true,
			},
		],
		"no-unused-vars": "off",
		"react/jsx-key": "error",
	},
}
