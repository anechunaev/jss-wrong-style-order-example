export default (theme: any) => ({
	alert: {
		...theme.mixins.passive.warning(theme),
	},
	danger: {
		...theme.mixins.passive.danger(theme),
	}
})