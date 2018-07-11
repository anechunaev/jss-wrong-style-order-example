import * as React from 'react';
const cn = require('classnames');
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export interface ITextProps {
	header?: boolean;
	large?: boolean;
	extraLarge?: boolean;
	small?: boolean;
	extraSmall?: boolean;
	paragraph?: boolean;
	inline?: boolean;
	size?: "XL" | "L" | "M" | "S" | "XS";
	type?: "default" | "dark" | "light" | "success" | "danger" | "secondary";
	headerLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
	centered?: boolean;
}

export interface IOuterProps extends IBaseOuterProps<HTMLSpanElement>, ITextProps {
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class TextView extends React.Component<IInnerProps> {
	public static displayName = 'Order.Text.View';

	public render() {
		const {
			className,
			classes,
			theme,
			children,
			elementRef,
			header,
			inline,
			paragraph = !inline,
			extraSmall,
			small,
			large,
			extraLarge,
			size,
			type,
			headerLevel = 0,
			centered,
			...rest
		} = this.props;

		const container = headerLevel === 0 ? 'span' : 'h' + headerLevel;

		return React.createElement(
			container,
			{
				ref: elementRef,
				className: cn({
					[className || '']: !!className,
					[classes.base]: true,
					[classes.header]: header,
					[classes.paragraph]: paragraph,
					[classes.inline]: inline || !paragraph,
					[classes.extraSmall]: extraSmall || size === "XS",
					[classes.small]: small || size === "S",
					[classes.large]: large || size === "L",
					[classes.extraLarge]: extraLarge || size === "XL",
					[classes.dark]: type === "dark",
					[classes.light]: type === "light",
					[classes.danger]: type === "danger",
					[classes.success]: type === "success",
					[classes.secondary]: type === "secondary",
					[classes.centered]: centered,
				}),
				...rest,
			},
			children,
		);
	}
}

export default TextView;