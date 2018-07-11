import * as React from 'react';
import { create as createJss } from 'jss';
import injectStyles, { createTheming } from 'react-jss';
import camelCase from 'jss-camel-case';
import compose from 'jss-compose';
import defaultUnit from 'jss-default-unit';
import globalStyles from 'jss-global';
import nested from 'jss-nested';
import vendorPrefixer from 'jss-vendor-prefixer';
import expand from 'jss-expand';
import cache from 'jss-cache';
import defaultTheme from '../theme';
import deepmerge from 'deepmerge';

const jss = createJss({
	insertionPoint: (() => {
		if (typeof document === 'undefined') return null;
		const noscript = document.getElementById('order-styles');
		if (noscript) return noscript;

		const iterator = document.createNodeIterator(
			document.head,
			NodeFilter.SHOW_COMMENT,
			// "node: any" is TS patch, not object because of IE9—11
			((node: any) => /Order\.Styles/i.test(node.data) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT) as any,
			false
		);
		return iterator.nextNode();
	})()
}).use(cache(), globalStyles(), nested(), compose(), camelCase(), defaultUnit(), expand(), vendorPrefixer());

export const jssInstance = jss;

const theming = createTheming('__TUTU-ORDER__');
const { ThemeProvider, withTheme } = theming;

export interface IProps {
	theme?: any; // @TODO patch theme
	patch?: any; // @TODO patch theme
}
class OrderThemeProvider extends React.PureComponent<IProps> {
	public static displayName = 'Order.ThemeProvider';

	public render() {
		const { children, patch } = this.props;
		let { theme = defaultTheme } = this.props;
		if (typeof patch !== "undefined") {
			theme = deepmerge.all([{}, theme, patch], { arrayMerge: (_dest, src) => src });
		}

		return (
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		);
	}
}
export default OrderThemeProvider;

const withStyles = (styles: any) => (component: React.ComponentType<any>) => {
	const styled = injectStyles(styles, { theming })(component);
	styled.displayName = 'Order.WithStyles';
	return styled;
}
export { withStyles };

const withThemePatched = withTheme;
withThemePatched.displayName = 'Order.WithTheme';
export { withThemePatched as withTheme };