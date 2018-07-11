type Dictionary<T> = {
	[index: string]: T;
}

declare module 'react-jss' { // @TODO: Move to @types/react-jss
	const decorator: (c: any, options?: any) => any;
	export default decorator;
	export const ThemeProvider: any;
	export const withTheme: (c: any) => any;
	export const createTheming: (namespace: string) => any;
	export const JssProvider: any;
	export const SheetsRegistry: any;
	export const createGenerateClassName: () => any;
}

declare module 'jss' { // @TODO Move to @types/jss
	export const create: any;
}

declare module 'jss-*' { // @TODO Move to @types/jss-*
	const plugin: () => any;
	export default plugin;
}

declare module 'jss-preset-default' { // @TODO: Move to @types/jss-preset-default
	const preset: () => void;
	export default preset;
}

interface NodeRequire { // @TODO webpack d.ts patch
	context?: any;
}