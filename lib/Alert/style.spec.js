require = require('esm')(module, { mode: 'all' });
const test = require('tape');

const style = require('./style').default;
const theme = require('../../theme').default;

test('Alert styles', t => {
	const generatedStyles = style(theme);

	t.equal(typeof generatedStyles.alert, 'object', 'style "alert" should return object');
	t.ok(!!generatedStyles.danger, 'style "danger" should return object');

	t.end();
});