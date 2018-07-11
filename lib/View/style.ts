export default (theme: any) => ({
	wrapper: {
		display: 'inline-flex',
		width: '100%',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		color: theme.context.text.color(theme).normal,
	},
	nowrap: {
		flexWrap: 'nowrap',
	},
	withPadding: {
		padding: '0 2%',
	},
})