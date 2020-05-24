module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				body: {
					default: '#15202b',
				},
				primary: {
					default: '#1da1f2',
				},
				gray: {
					900: '#253341',
					800: 'rgba(29,161,242,0.1)',
					600: '#38444d',
				},
			},
		},
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
		visibility: ['responsive', 'hover', 'focus'],
		flex: ['responsive', 'hover', 'focus'],
	},
	plugins: [],
};
