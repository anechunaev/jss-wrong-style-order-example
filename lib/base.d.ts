export interface IBaseOuterProps<T> {
	className?: string;
	elementRef?: React.Ref<T>;
	theme?: any; // @TODO описать тему
}

export interface IBaseInnerProps {
	classes: {[key: string]: string};
}

interface IInnerEditableProps<T> {
	value?: string;
	defaultValue?: string;
	onChange?: (e: React.SyntheticEvent<T>) => void;
	onFocus?: (e: React.SyntheticEvent<T>) => void;
	onBlur?: (e: React.SyntheticEvent<T>) => void;
	name?: string;
	placeholder?: string;
}
export interface IEditableProps<T> extends IInnerEditableProps<T> {
	hiddenInputProps?: IInnerEditableProps<HTMLInputElement>;
}

export interface ISelectableProps {

}

export interface IClickableProps<T> {
	onClick?: (e: React.SyntheticEvent<T>) => void;
	toggled?: boolean;
}

export interface IPassiveProsp {

}

export interface ITextProps {

}