export default (colors: any) => ({
	clickable: {
		default: {
			normal: colors.gradient.grey,
			hover: colors.gradient.greyLight,
			active: colors.gradient.greyReversed,
		},
		primary: {
			normal: colors.gradient.blue,
			hover: colors.gradient.blueLight,
			active: colors.gradient.blueReversed,
		},
	},
	selectable: {
		default: {
			normal: colors.base.white,
			hover: colors.gradient.cyan,
			active: colors.gradient.cyanReversed,
		},
	},
	editable: {
		default: {
			normal: colors.base.white,
			focus: colors.base.white,
			invalid: colors.base.yellowLight,
			disabled: colors.gradient.greyReversedAlternative,
		}
	},
	passive: {
		default: colors.base.white,
		accent: colors.base.beige,
		success: colors.base.greenLight,
		danger: colors.gradient.red,
		warning: colors.gradient.yellow,
	},
	link: {
		default: {
			normal: colors.base.blue,
			hover: colors.base.red,
			active: colors.base.red,
		},
		dark: {
			normal: colors.base.black,
			hover: colors.base.red,
			active: colors.base.red,
		},
		light: {
			normal: colors.base.white,
			hover: colors.base.red,
			active: colors.base.red,
		},
		danger: {
			normal: colors.base.red,
			hover: colors.base.black,
			active: colors.base.black,
		},
		success: {
			normal: colors.base.green,
			hover: colors.base.red,
			active: colors.base.red,
		},
		secondary: {
			normal: colors.base.grey,
			hover: colors.base.red,
			active: colors.base.red,
		},
	},
	text: {
		default: {
			normal: colors.base.black,
			hover: colors.base.black,
			active: colors.base.black,
		},
		dark: {
			normal: colors.base.black,
			hover: colors.base.black,
			active: colors.base.black,
		},
		light: {
			normal: colors.base.white,
			hover: colors.base.white,
			active: colors.base.white,
		},
		danger: {
			normal: colors.base.red,
			hover: colors.base.red,
			active: colors.base.red,
		},
		success: {
			normal: colors.base.green,
			hover: colors.base.green,
			active: colors.base.green,
		},
		secondary: {
			normal: colors.base.grey,
			hover: colors.base.grey,
			active: colors.base.grey,
		},
	}
});