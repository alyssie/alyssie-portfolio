module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				82: '21rem',
				86: '22rem',
				100: '25rem',
			},
			keyframes: {
				fade: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				}
			},
			animation: {
				fade: 'fade 0.3s ease-in-out',
			},
		},
	},
	variants: {
		extend: {
			margin: ['hover', 'focus'],
			padding: ['hover', 'focus'],
			height: ['hover', 'focus'],
			fontWeight: ['hover', 'focus'],
			textColor: ['hover', 'focus'],
		},
	},
	plugins: [],
}