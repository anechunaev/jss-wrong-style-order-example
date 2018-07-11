import * as React from 'react';
import Alert from '../index';

export default () => (
	<div>
		<div data-capture="plain">
			<Alert>Lorem ipsum</Alert>
		</div>
		<div data-capture="danger">
			<Alert danger>Lorem ipsum</Alert>
		</div>
		<div data-capture="with-title">
			<Alert title="Lorem ipsum">Dolor sit amert</Alert>
		</div>
		<div data-capture="without-margin">
			<Alert withMargin={false}>Lorem ipsum</Alert>
		</div>
	</div>
)