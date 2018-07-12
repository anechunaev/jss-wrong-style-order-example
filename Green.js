import * as React from 'react';
import injectStyles, { ThemeProvider } from 'react-jss';
import Red from './Red';

const style = (theme) => ({
	green: {
		background: '#090',
		color: theme.color,
	},
});

const GreenView = ({ classes, children }) => (
	<Red className={classes.green}>{children}</Red>
);

const GreenEnhanced = injectStyles(style)(GreenView);
const Green = props => (
	<ThemeProvider theme={{ color: '#fff' }}>
		<GreenEnhanced {...props} />
	</ThemeProvider>
);
Green.displayName = 'Green';
export default Green;