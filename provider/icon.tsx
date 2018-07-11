import * as React from 'react';
import deepmerge from 'deepmerge';
import ThemeProvider, { withTheme } from './theme';
import Loader from './loader';

export interface IProps {
	pack: string;
	defaultName?: string;
}
export interface IInnerProps extends IProps {
	theme: any;
}

const Child = (children: any) => () => children; // React v15 compatibility

class IconProvider extends React.PureComponent<IInnerProps> {
	public static displayName = 'Order.IconProvider';

	private loader: Loader;

	constructor(props: IInnerProps) {
		super(props);
		this.loader = Loader.getInstance();
	}

	public render() {
		const { theme, pack, children, defaultName = 'order' } = this.props;
		const patchedTheme = deepmerge.all([{}, theme, {
			variables: { iconSource: pack || theme.variables.iconSource, iconPackName: defaultName }
		}]);
		const ProviderChildren = Child(children);

		if (typeof document !== "undefined") {
			this.loader.loadIconPack(this.props.pack || this.props.theme.variables.iconSource);
		}

		return <ThemeProvider theme={patchedTheme}><ProviderChildren /></ThemeProvider>;
	}
}

export default withTheme(IconProvider);