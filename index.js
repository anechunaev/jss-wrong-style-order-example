import * as React from 'react';
import { ThemeProvider, JssProvider } from 'react-jss';
import { create } from 'jss';
import { render } from 'react-dom';
import Green from './Green';

const jss = create().setup({
	insertionPoint: (() => {
		if (typeof document === 'undefined') return null;

		const iterator = document.createNodeIterator(
			document.head,
			NodeFilter.SHOW_COMMENT,
			// not object because of IE9—11
			((node) => /custom/i.test(node.data) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
			false
		);
		return iterator.nextNode();
	})()
});

const App = () => (
	<JssProvider jss={jss}>
		<ThemeProvider theme={{ color: '#fff' }}>
			<div>
				<Green>Always green</Green>
				<Green>Should be green, but it's red</Green>
			</div>
		</ThemeProvider>
	</JssProvider>
);

document.addEventListener('DOMContentLoaded', () => {
	render(
		<App />,
		document.getElementById('app'),
	);
});