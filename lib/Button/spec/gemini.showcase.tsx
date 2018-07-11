import * as React from 'react';
import Button from '../index';

export default () => (
	<div>
		<div data-capture="plain">
			<Button data-el="plain">Hello world!</Button>
		</div>
		<div data-capture="expanded">
			<Button data-el="expanded" expanded>Hello world!</Button>
		</div>
		<div data-capture="primary">
			<Button data-el="primary" primary>Hello world!</Button>
		</div>
		<div data-capture="disabled">
			<Button data-el="disabled" disabled>Hello world!</Button>
		</div>
		<div data-capture="primary-expanded">
			<Button data-el="primary-expanded" expanded primary>Hello world!</Button>
		</div>
		<div data-capture="primary-disabled">
			<Button data-el="primary-disabled" disabled primary>Hello world!</Button>
		</div>
		<div data-capture="href">
			<Button data-el="href" href="#">Hello world!</Button>
		</div>
	</div>
);