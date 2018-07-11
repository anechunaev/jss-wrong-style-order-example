import * as React from 'react';
const cn = require('classnames');
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	width?: number;
	nowrap?: boolean;
	withPadding?: boolean;
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class View extends React.Component<IInnerProps> {
	public static displayName = 'Order.ViewBox.View';
	public static defaultProps = {
		elementRef: () => {},
	};

	public render() {
		const { width, nowrap, withPadding, className, classes, elementRef, children, theme, ...rest } = this.props;
		const attributes: Dictionary<any> = {};

		if (typeof width !== 'undefined') {
			attributes.style = {
				width: width * 100 + '%'
			};
		}

		return (
			<div
				className={cn({
					[classes.wrapper]: true,
					[classes.nowrap]: nowrap,
					[classes.withPadding]: withPadding,
					[className || '']: !!className,
				})}
				ref={elementRef}
				{...attributes}
				{...rest}
			>
				{children}
			</div>
		)
	}
}

export default View;