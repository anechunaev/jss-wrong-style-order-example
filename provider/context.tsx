import * as React from 'react';
import ThemeProvider, { withTheme } from './theme';
import cloneDeep from 'lodash-es/cloneDeep';

export interface IProps extends React.Props<HTMLDivElement> {
	theme: any;		// @TODO: theme types
	primary?: boolean;
	secondary?: boolean;
	dark?: boolean;
	light?: boolean;
}

class ContextProvider extends React.Component<IProps> {
	public render() {
		const { theme, children, primary, secondary, light, dark } = this.props;

		const patchedTheme = cloneDeep(theme);

		// Primary/secondary context
		if (secondary && !primary) {
			patchedTheme.context.text.font = (_theme = patchedTheme) => _theme.fonts.secondary;
			patchedTheme.context.metrics.box = (_theme = patchedTheme) => _theme.metrics.box.secondary;
		}
		if (!secondary && primary) {
			patchedTheme.context.text.font = (_theme = patchedTheme) => _theme.fonts.primary;
			patchedTheme.context.metrics.box = (_theme = patchedTheme) => _theme.metrics.box.primary;
		}

		// Light/dark context
		if (light && !dark) {
			patchedTheme.context.text.color = (_theme = patchedTheme) => _theme.palette.text.light;
		}
		if (!light && dark) {
			patchedTheme.context.text.color = (_theme = patchedTheme) => _theme.palette.text.dark;
		}

		patchedTheme.hash = Date.now();

		return <ThemeProvider theme={patchedTheme}>{children}</ThemeProvider>;
	}
}

const StyleContextProvider = withTheme(ContextProvider);
StyleContextProvider.displayName = 'Order.StyleContextProvider';

export default StyleContextProvider;