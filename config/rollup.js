import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import visualizer from 'rollup-plugin-visualizer';

export default {
	input: 'entries/lib.ts',
	output: [
		{
			name: 'order',
			file: 'dist/lib.js',
			format: 'cjs'
		},
		{
			name: 'order',
			file: 'dist/lib.esm.js',
			format: 'es'
		}
	],
	plugins: [
		commonjs({
			namedExports: {
				'react-jss': [ 'createTheming', 'JssProvider' ],
				'react-popper': [ 'Popper', 'Arrow', 'Manager', 'Target' ],
				'react': [ 'createElement', 'PureComponent', 'Component', 'Children', 'cloneElement' ]
			},
			exclude: [ 'node_modules/**' ]
		}),
		typescript(),
		resolve(),
		uglify({}, minify),
		visualizer({
			filename: 'dist/stats.html',
			title: 'Order'
		}),
	],
	external: [
		"classnames",
		"deepmerge",
		"jss",
		"jss-cache",
		"jss-camel-case",
		"jss-compose",
		"jss-default-unit",
		"jss-expand",
		"jss-global",
		"jss-nested",
		"jss-vendor-prefixer",
		"lodash-es",
		"lodash-es/throttle",
		"lodash-es/cloneDeep",
		"react",
		"react-day-picker",
		"react-dom",
		"react-input-mask",
		"react-jss",
		"react-modal",
		"react-popper",
		"react-transition-group",
		"react-transition-group/Transition",
	],
};