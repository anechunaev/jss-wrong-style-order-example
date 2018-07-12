import * as React from 'react';
import injectStyles from 'react-jss';

const style = (theme) => ({
	box: {
		margin: '20px 0',
		padding: '15px 20px',
		font: '400 12pt/16pt sans-serif',
	},
	red: {
		background: '#c00',
		color: theme.color,
	},
});

const RedView = ({ classes, children, className }) => (
	<div
		className={classes.box + ' ' + classes.red + ' ' + className}
	>
		{children}
	</div>
);

const Red = injectStyles(style)(RedView);
Red.displayName = 'Red';
export default Red;