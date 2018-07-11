import * as React from 'react';
import defaultTheme from '../theme';
import ThemeProvider, { jssInstance as jss } from './theme';
import { JssProvider } from 'react-jss';
import deepmerge from 'deepmerge';
import IconProvider from './icon';

const RootProvider = ({ children, theme = defaultTheme, registry, patch }: React.Props<{}> & {theme?: any, registry?: any, patch?: any}) => {
	if (typeof patch !== "undefined") {
		theme = deepmerge.all([{}, theme, patch], { arrayMerge: (_dest, src) => src });
	}

	return (
		<JssProvider jss={jss} registry={registry}>
			<ThemeProvider theme={theme}>
				<IconProvider>
					{children}
				</IconProvider>
			</ThemeProvider>
		</JssProvider>
	);
}

export default RootProvider;