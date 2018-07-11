export default {
	default: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.passive.default,
	}),
	accent: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.passive.accent,
	}),
	success: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.passive.success,
	}),
	danger: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.passive.danger,
	}),
	warning: (theme: any) => ({
		color: theme.context.text.color(theme).normal,
		background: theme.palette.passive.warning,
	}),
}