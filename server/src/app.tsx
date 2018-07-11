import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AlertShowcase from '../../lib/Alert/spec/gemini.showcase';
import ButtonShowcase from '../../lib/Button/spec/gemini.showcase';

export default () => (
	<div style={{ margin: '30px', font: '400 15px/1.33 Arial, Helvetica, sans-serif' }}>
		<Switch>
			<Route exact path="/Alert" component={AlertShowcase} />
			<Route exact path="/Button" component={ButtonShowcase} />
		</Switch>
	</div>
);