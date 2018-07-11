import * as React from 'react';
const cn = require('classnames');
import { IBaseOuterProps, IBaseInnerProps } from '../base';
import ViewBox from '../View';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	withPadding?: boolean;
	withMargin?: boolean;
	withShadow?: boolean;
	sizeByContent?: boolean;
	type?: "accent" | "warning" | "danger" | "success";
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class PanelView extends React.PureComponent<IInnerProps> {
	public static displayName = 'Order.Panel.View';
	public static defaultProps = {
		withPadding: true,
		withMargin: true,
		withShadow: true,
		sizeByContent: false,
		elementRef: () => {},
	};

	public render() {
		const {
			classes,
			withPadding,
			withMargin,
			withShadow,
			sizeByContent,
			className,
			children,
			type,
			theme,
			...rest
		} = this.props;

		return (
			<ViewBox
				{...rest}
				className={cn({
					[classes.panel]: true,
					[classes.withPadding]: withPadding,
					[classes.withMargin]: withMargin,
					[classes.withShadow]: withShadow,
					[classes.sizeByContent]: sizeByContent,
					[classes.accent]: type === "accent",
					[classes.warning]: type === "warning",
					[classes.danger]: type === "danger",
					[classes.success]: type === "success",
					[className || '']: !!className,
				})}
			>
				{children}
			</ViewBox>
		);
	}
}

export default PanelView;