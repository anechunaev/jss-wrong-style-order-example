export default {
	default: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.editable.default.normal,
		boxShadow: `inset 0 0 0 1px ${theme.colors.border.grey}, inset 0 2px 3px 0 ${theme.colors.shadow.grey}`,
		border: 0,
		boxSizing: 'border-box',
		'-webkit-appearance': 'none',

		'&:invalid': {
			background: theme.palette.editable.default.invalid,
			boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}, inset 0 1px 4px 0 ${theme.colors.shadow.yellow}`,
		},

		'&:focus': {
			background: theme.palette.editable.default.focus,
			boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}, inset 0 1px 4px 0 ${theme.colors.shadow.blueLight}`,
		},

		'&:disabled': {
			background: theme.palette.editable.default.disabled,
		},
	}),
	invalid: (theme: any) => ({
		border: 0,
		background: theme.palette.editable.default.invalid,
		boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}, inset 0 1px 4px 0 ${theme.colors.shadow.yellow}`,
		'-webkit-appearance': 'none',
	}),
	disabled: (theme: any) => ({
		border: 0,
		background: theme.palette.editable.default.disabled,
		'-webkit-appearance': 'none',
	}),
}