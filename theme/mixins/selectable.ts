export default {
	default: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.selectable.default.normal,
		cursor: 'pointer',
		boxSizing: 'border-box',

		'&:hover': {
			color: theme.context.text.color(theme).normal,
			background: theme.palette.selectable.default.hover,
		},

		'&:active': {
			background: theme.palette.selectable.default.active,
		},
	}),
	selected: (theme: any) => ({
		background: theme.palette.selectable.default.hover,
	}),
}