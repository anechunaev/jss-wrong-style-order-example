import * as React from 'react';
import { withStyles, StyleContextProvider } from '../../provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';

const EnhancedView = withStyles(styles)(View as any); // @TODO Patch @types/react@16

export type IProps = IViewProps;

const Button: React.SFC<IProps> = (props: IProps) => (
	<StyleContextProvider light={props.primary} dark={!props.primary}>
		<EnhancedView {...props} />
	</StyleContextProvider>
);
Button.displayName = 'Order.Button';

export default Button;