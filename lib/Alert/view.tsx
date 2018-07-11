import * as React from 'react';
const cn = require('classnames');
import { IBaseInnerProps, IBaseOuterProps } from '../base';
import Panel from '../Panel';
import Text from '../Text';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	withMargin?: boolean;
	danger?: boolean;
	title?: string;
}
export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class AlertView extends React.Component<IInnerProps> {
	public static displayName = 'Order.Alert.View';
	public static defaultProps = {
		withMargin: true,
		danger: false,
		elementRef: () => {},
	}

	public render() {
		return (
			<Panel
				className={cn({
					[this.props.classes.alert]: true,
					[this.props.classes.danger]: this.props.danger,
					[this.props.className || '']: !!this.props.className,
				})}
				withShadow={false}
				withMargin={this.props.withMargin}
				elementRef={this.props.elementRef}
			>
				{!!this.props.title && (
					<Text header>{this.props.title}</Text>
				)}
				{this.props.children}
			</Panel>
		);
	}
}

export default AlertView;