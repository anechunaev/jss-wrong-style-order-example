export default (theme: any) => {
	const STEP = theme.variables.metricsStep;

	return {
		panel: {
			borderRadius: theme.variables.interactive.borderRadius,
			background: theme.palette.passive.default,
		},
		withPadding: {
			padding: [2 * STEP, 3 * STEP, 4 * STEP, 3 * STEP],
			boxSizing: 'border-box',
		},
		withMargin: {
			margin: [2 * STEP, 0],
			boxSizing: 'border-box',
		},
		withShadow: {
			boxShadow: '0 4px 5px 0 rgba(65, 97, 124, 0.1), 0 4px 11px 1px rgba(65, 97, 124, 0.4), 0 0 1px 1px rgba(65, 97, 124, 0.1)',
		},
		sizeByContent: {
			width: 'auto',
		},
		accent: {
			background: theme.palette.passive.accent,
		},
		warning: {
			background: theme.palette.passive.warning,
		},
		danger: {
			background: theme.palette.passive.danger,
		},
		success: {
			background: theme.palette.passive.success,
		},
	}
};