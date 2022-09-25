module.exports = {
	content: [ './*.html' ],
	screens: {
		sm: '480px',
		sm: '768px',
		sm: '976px',
		sm: '1440px'
	},
	theme: {
		extend: {
			fontFamily: {
				sans: [ 'Barlow Semi Condensed', 'sans-serif' ]
			}
		}
	},
	plugins: [ require('@tailwindcss/line-clamp') ]
};
