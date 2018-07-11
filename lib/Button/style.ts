export default (theme: any) => ({
	wrapper: {
		'-webkit-tap-highlight-color': 'transparent',
		...theme.mixins.groupItem(theme),
		...theme.mixins.clickable.default(theme),
		height: 'auto',
		color: theme.context.text.color(theme).normal,
		font: theme.context.text.font(theme).style.paragraphMedium,
		textShadow: `0 1px 0 ${theme.colors.shadow.white}`,
		textDecoration: 'none',
		display: 'inline-flex',
		position: 'relative',
		padding: 0,
		justifyContent: 'center',
		margin: theme.mixins.metrics.box(theme).wrapper,
		minWidth: 40,
		minHeight: theme.context.metrics.box(theme).minHeight,
	},
	disabled: {
		opacity: 0.5,
		cursor: 'default',
		backgroundImage: theme.palette.clickable.default.normal,
		boxShadow: 'inherit',

		'&:hover, &:active': {
			backgroundImage: theme.palette.clickable.default.normal,
			boxShadow: 'inherit',
		},
	},
	primary: {
		...theme.mixins.clickable.primary(theme),
		textShadow: `0 -1px 0 ${theme.colors.shadow.black}`,

		'&$disabled': {
			backgroundImage: theme.palette.clickable.primary.normal,
			boxShadow: 'inherit',
			cursor: 'default',
			'&:hover, &:active': {
				backgroundImage: theme.palette.clickable.primary.normal,
				boxShadow: 'inherit',
			},
		},
	},
	expanded: {
		width: '100%',
	},
	toggled: {
		...theme.mixins.clickable.toggled(theme),

		'&:hover': {
			backgroundImage: theme.palette.selectable.default.active,
		},
	},
	slotContent: {
		padding: theme.mixins.metrics.box(theme).content,
		alignSelf: 'center',
	},
	slotLeft: {
		padding: theme.mixins.metrics.box(theme).content,
		paddingRight: 0,
		alignSelf: 'center',
	},
	slotRight: {
		padding: theme.mixins.metrics.box(theme).content,
		paddingLeft: 0,
		alignSelf: 'center',
	},
});