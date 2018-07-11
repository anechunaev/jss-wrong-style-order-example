type FontStyle = {
	[key: string]: {
		[key: string]: string | number;
	};
};

const defaultFontFamily = 'Arial, Helvetica, sans-serif';

const size: FontStyle = {
	primary: {
		headerExtraLarge: 24,
		headerLarge: 20,
		headerMedium: 18,
		headerSmall: 15,
		headerExtraSmall: 15,
		paragraphExtraLarge: 20,
		paragraphLarge: 18,
		paragraphMedium: 15,
		paragraphSmall: 13,
		paragraphExtraSmall: 12,
	},
	secondary: {
		headerExtraLarge: 20,
		headerLarge: 18,
		headerMedium: 15,
		headerSmall: 15,
		headerExtraSmall: 15,
		paragraphExtraLarge: 18,
		paragraphLarge: 15,
		paragraphMedium: 13,
		paragraphSmall: 12,
		paragraphExtraSmall: 12,
	},
};
const lineHeight: FontStyle = {
	primary: {
		headerExtraLarge: 1.25,
		headerLarge: 1.25,
		headerMedium: 1.11,
		headerSmall: 1.33,
		headerExtraSmall: 1.33,
		paragraphExtraLarge: 1.2,
		paragraphLarge: 1.22,
		paragraphMedium: 1.33,
		paragraphSmall: 1.54,
		paragraphExtraSmall: 1.42,
	},
	secondary: {
		headerExtraLarge: 1.25,
		headerLarge: 1.11,
		headerMedium: 1.33,
		headerSmall: 1.33,
		headerExtraSmall: 1.33,
		paragraphExtraLarge: 1.22,
		paragraphLarge: 1.33,
		paragraphMedium: 1.38,
		paragraphSmall: 1.42,
		paragraphExtraSmall: 1.42,
	},
};
const weight: FontStyle = {
	primary: {
		headerExtraLarge: 600,
		headerLarge: 600,
		headerMedium: 600,
		headerSmall: 600,
		headerExtraSmall: 600,
		paragraphExtraLarge: 400,
		paragraphLarge: 400,
		paragraphMedium: 400,
		paragraphSmall: 400,
		paragraphExtraSmall: 400,
	},
	secondary: {
		headerExtraLarge: 600,
		headerLarge: 600,
		headerMedium: 600,
		headerSmall: 600,
		headerExtraSmall: 600,
		paragraphExtraLarge: 400,
		paragraphLarge: 400,
		paragraphMedium: 400,
		paragraphSmall: 400,
		paragraphExtraSmall: 400,
	},
};
const family: FontStyle = {
	primary: {
		headerExtraLarge: defaultFontFamily,
		headerLarge: defaultFontFamily,
		headerMedium: defaultFontFamily,
		headerSmall: defaultFontFamily,
		headerExtraSmall: defaultFontFamily,
		paragraphExtraLarge: defaultFontFamily,
		paragraphLarge: defaultFontFamily,
		paragraphMedium: defaultFontFamily,
		paragraphSmall: defaultFontFamily,
		paragraphExtraSmall: defaultFontFamily,
	},
	secondary: {
		headerExtraLarge: defaultFontFamily,
		headerLarge: defaultFontFamily,
		headerMedium: defaultFontFamily,
		headerSmall: defaultFontFamily,
		headerExtraSmall: defaultFontFamily,
		paragraphExtraLarge: defaultFontFamily,
		paragraphLarge: defaultFontFamily,
		paragraphMedium: defaultFontFamily,
		paragraphSmall: defaultFontFamily,
		paragraphExtraSmall: defaultFontFamily,
	},
};

const getFontStyle = (context: string, style: string) => `${weight[context][style]} ${size[context][style]}px/${lineHeight[context][style]} ${family[context][style]}`;

export default {
	primary: {
		style: {
			headerExtraLarge: getFontStyle('primary', 'headerExtraLarge'),
			headerLarge: getFontStyle('primary', 'headerLarge'),
			headerMedium: getFontStyle('primary', 'headerMedium'),
			headerSmall: getFontStyle('primary', 'headerSmall'),
			headerExtraSmall: getFontStyle('primary', 'headerExtraSmall'),
			paragraphExtraLarge: getFontStyle('primary', 'paragraphExtraLarge'),
			paragraphLarge: getFontStyle('primary', 'paragraphLarge'),
			paragraphMedium: getFontStyle('primary', 'paragraphMedium'),
			paragraphSmall: getFontStyle('primary', 'paragraphSmall'),
			paragraphExtraSmall: getFontStyle('primary', 'paragraphExtraSmall'),
		},
		metrics: {
			size: size.primary,
			lineHeight: lineHeight.primary,
			weight: weight.primary,
			family: family.primary,
		},
	},
	secondary: {
		style: {
			headerExtraLarge: getFontStyle('secondary', 'headerExtraLarge'),
			headerLarge: getFontStyle('secondary', 'headerLarge'),
			headerMedium: getFontStyle('secondary', 'headerMedium'),
			headerSmall: getFontStyle('secondary', 'headerSmall'),
			headerExtraSmall: getFontStyle('secondary', 'headerExtraSmall'),
			paragraphExtraLarge: getFontStyle('secondary', 'paragraphExtraLarge'),
			paragraphLarge: getFontStyle('secondary', 'paragraphLarge'),
			paragraphMedium: getFontStyle('secondary', 'paragraphMedium'),
			paragraphSmall: getFontStyle('secondary', 'paragraphSmall'),
			paragraphExtraSmall: getFontStyle('secondary', 'paragraphExtraSmall'),
		},
		metrics: {
			size: size.secondary,
			lineHeight: lineHeight.secondary,
			weight: weight.secondary,
			family: family.secondary,
		},
	},
};