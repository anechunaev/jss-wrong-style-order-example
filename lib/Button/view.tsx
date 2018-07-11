import * as React from 'react';
const cn = require('classnames');
import {
	IBaseInnerProps,
	IBaseOuterProps,
	IClickableProps,
	IEditableProps,
} from '../base';

export type ClickableElement = HTMLButtonElement | HTMLAnchorElement;

export interface IOuterProps extends
	IBaseOuterProps<ClickableElement>,
	IClickableProps<ClickableElement>,
	IEditableProps<ClickableElement> {
	href?: string;
	target?: string;
	disabled?: boolean;
	tabIndex?: number;
	expanded?: boolean;
	primary?: boolean;
	style?: {[key: string]: string};
	iconSlotLeft?: any;
	iconSlotRight?: any;
}

export interface IState {
	value?: string;
	hiddenInputProps?: any; // @TODO dropdown fix
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

const noop = () => {};

const Container: React.SFC<Partial<IInnerProps>> = (props) => {
	const {
		href,
		target,
		children,
		className,
		onClick,
		elementRef,
		disabled,
		tabIndex,
		onBlur,
		onFocus,
		style,
		hiddenInputProps,
		active,
		...rest
	} = props as any; // @TODO узнать, откуда в кнопке появляется active

	return !!href ? (
		<a
			href={href}
			target={target}
			className={className}
			onClick={onClick}
			ref={elementRef as any/* @TODO избавиться от union type */}
			tabIndex={tabIndex}
			onBlur={onBlur}
			onFocus={onFocus}
			style={style}
			{...rest}
		>
			{children}
		</a>
	) : (
		<button
			className={className}
			onClick={onClick}
			ref={elementRef as any/* @TODO избавиться от union type */}
			disabled={disabled}
			tabIndex={tabIndex}
			onBlur={onBlur}
			onFocus={onFocus}
			style={style}
			{...rest}
		>
			{children}
		</button>
	);
}

class ButtonView extends React.PureComponent<IInnerProps, IState> {
	public static displayName = 'Order.Button.View';
	public static defaultProps = {
		onClick: () => {},
		onChange: () => {},
		onFocus: () => {},
		onBlur: () => {},
		elementRef: () => {},
		disabled: false,
		active: false,
		primary: false,
		expanded: false,
	}

	constructor(props: IInnerProps) {
		super(props);

		this.state = {
			value: props.value,
			hiddenInputProps: props.hiddenInputProps,
		};
	}

	public static getDerivedStateFromProps(props: IInnerProps, state: IState) {
		if (typeof props.onChange !== "function") { return null; }

		const newState: IState = {};

		if (props.value) newState.value = props.value;
		if ((props.hiddenInputProps || {}).value) newState.hiddenInputProps = { value: (props.hiddenInputProps || {}).value };

		if (
			(state.value !== props.value) ||
			(!!state.hiddenInputProps && !!props.hiddenInputProps && state.hiddenInputProps.value !== props.hiddenInputProps.value)
		) {
			const target = {
				value: (props.hiddenInputProps || {}).value || props.value,
			};
			const customEvent = { target, currentTarget: target };
			props.onChange(customEvent as React.ChangeEvent<HTMLButtonElement>);
		} else {
			return null;
		}

		return newState;
	}

	private onElementClick = (e: React.SyntheticEvent<ClickableElement> /* @TODO избавиться от union type */) => {
		if (typeof (e.currentTarget as any).focus === "function") { // OS X FF+Safari fix
			(e.currentTarget as any).focus();
		}

		if (this.props.onClick) {
			this.props.onClick(e);
		}
	};

	public render() {
		const {
			children,
			classes,
			disabled,
			href,
			onClick,
			elementRef,
			target,
			primary,
			tabIndex,
			expanded,
			toggled,
			iconSlotLeft,
			iconSlotRight,
			className,
			onBlur,
			onFocus,
			style,
			value,
			defaultValue,
			theme,
			...rest
		} = this.props;

		const hiddenInputProps = {
			onChange: this.props.onChange,
			...(this.props.hiddenInputProps || {})
		};

		return (
			<Container
				className={cn({
					[classes.wrapper]: true,
					[classes.disabled]: disabled,
					[classes.primary]: primary,
					[classes.expanded]: expanded,
					[classes.toggled]: toggled,
				}, className)}
				onClick={!disabled ? this.onElementClick : noop}
				href={href}
				target={target}
				elementRef={elementRef}
				disabled={disabled}
				tabIndex={tabIndex}
				onBlur={onBlur}
				onFocus={onFocus}
				style={style}
				value={value}
				defaultValue={defaultValue}
				hiddenInputProps={hiddenInputProps as any/* @TODO избавиться от union type */}
				{...rest}
			>
				{!!iconSlotLeft && (
					<div className={classes.slotLeft}>{iconSlotLeft}</div>
				)}
				<div className={classes.slotContent}>{children || this.state.value || defaultValue}</div>
				{!!iconSlotRight && (
					<div className={classes.slotRight}>{iconSlotRight}</div>
				)}
			</Container>
		);
	}
}

export default ButtonView;