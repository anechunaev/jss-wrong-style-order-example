export default (theme: any) => ({
	base: {
		font: theme.context.text.font(theme).style.paragraphMedium,
		fontWeight: 'inherit',
	},
	header: {
		display: 'inline-flex',
		width: '100%',
		font: theme.context.text.font(theme).style.headerMedium,
	},
	paragraph: {
		margin: [10, 0, 5],
		display: 'inline-block',
		position: 'relative',
		width: '100%',

		'&$extraLarge': {
			margin: [11, 0, 5],
		},

		'&$large': {
			margin: [8, 0, 5],
		},

		'&$small': {
			margin: [5, 0, 5],
		},

		'&$extraSmall': {
			margin: [7, 0, 6],
		},

		'&$header $extraLarge': {
			margin: [12, 0, 3],
		},

		'&$header': {
			margin: [8, 0, 7],
		},
	},
	inline: {
		display: 'inline',
	},
	extraSmall: {
		'&$paragraph, &$inline': {
			font: theme.context.text.font(theme).style.paragraphExtraSmall,
			fontWeight: 'inherit',
		},

		'&$header': {
			font: theme.context.text.font(theme).style.headerExtraSmall,
		},
	},
	small: {
		'&$paragraph, &$inline': {
			font: theme.context.text.font(theme).style.paragraphSmall,
			fontWeight: 'inherit',
		},
		
		'&$header': {
			font: theme.context.text.font(theme).style.headerSmall,
		},
	},
	large: {
		'&$paragraph, &$inline': {
			font: theme.context.text.font(theme).style.paragraphLarge,
			fontWeight: 'inherit',
		},
		
		'&$header': {
			font: theme.context.text.font(theme).style.headerLarge,
		},
	},
	extraLarge: {
		'&$paragraph, &$inline': {
			font: theme.context.text.font(theme).style.paragraphExtraLarge,
			fontWeight: 'inherit',
		},
		
		'&$header': {
			font: theme.context.text.font(theme).style.headerExtraLarge,
		},
	},
	dark: {
		color: theme.palette.text.dark.normal,
	},
	light: {
		color: theme.palette.text.light.normal,
	},
	danger: {
		color: theme.palette.text.danger.normal,
	},
	success: {
		color: theme.palette.text.success.normal,
	},
	secondary: {
		color: theme.palette.text.secondary.normal,
	},
	centered: {
		textAlign: 'center',
	},
})