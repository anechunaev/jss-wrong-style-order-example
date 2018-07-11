const path = require('path');
const generate = require('dts-generator').default;
const libName = require('../package.json').name;
const options = {
	name: libName,
	out: path.resolve(__dirname, '../dist/lib.d.ts'),
	project: path.resolve(__dirname, '../'),
	main: `${libName}/entries/lib`,
	exclude: [
		'node_modules/**/*.d.ts',
		'global.d.ts',
	],
	resolveModuleId: (params) => {
		if (/\/index$/.test(params.currentModuleId)) {
			return libName + '/' + params.currentModuleId.replace(/\/index$/, '');
		} else {
			return null;
		}
	},
};

generate(options);