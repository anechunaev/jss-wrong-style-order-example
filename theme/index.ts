import mixins from './mixins';
import fonts from './fonts';
import palette from './palette';
import colors from './colors';
import variables from './variables';
import context from './context';
import metrics from './metrics';

export default {
	mixins,
	fonts,
	palette: palette(colors),
	colors,
	variables,
	context,
	metrics,
	hash: Date.now()
};