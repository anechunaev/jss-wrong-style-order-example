import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app';
import { RootProvider } from '../../provider';

const Empty = () => <div data-ti="error-empty">Empty</div>;

export const Chain = ({ registry }: {registry?: any}) => (
	<RootProvider registry={registry}>
		<Route exact path="/" component={Empty} />
		<Route exact path="/:component" component={App} />
	</RootProvider>
);

function render() {
	window.addEventListener("load", () => {
		const generatedStyles = document.getElementById('server-side-styles');

		if (!!generatedStyles) {
			generatedStyles.remove();
		}
	});

	document.addEventListener("DOMContentLoaded", () => {
		hydrate(
			<BrowserRouter>
				<Chain />
			</BrowserRouter>,
			document.getElementById('main'),
		);
	});
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') render();