export default {
	primary: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.clickable.primary.normal,
		cursor: 'pointer',
		boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}`,
		border: 0,

		'&:hover': {
			background: theme.palette.clickable.primary.hover,
		},

		'&:active': {
			background: theme.palette.clickable.primary.active,
			boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}, inset 0 1px 3px 0 ${theme.colors.shadow.blue}`,
		},
	}),
	default: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.clickable.default.normal,
		cursor: 'pointer',
		boxSizing: 'border-box',
		boxShadow: `inset 0 0 0 1px ${theme.colors.border.grey}`,
		border: 0,

		'&:hover': {
			background: theme.palette.clickable.default.hover,
			color: theme.context.text.color(theme).normal,
		},

		'&:active': {
			background: theme.palette.clickable.default.active,
			boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}`,
		},
	}),
	toggled: (theme: any) => ({
		background: theme.palette.selectable.default.active,
		boxShadow: `inset 0 1px 3px 0 ${theme.colors.shadow.blueAlternative}`,
	}),
}