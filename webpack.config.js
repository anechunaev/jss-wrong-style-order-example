const { resolve } = require('path');
const webpack = require('webpack');

module.exports = (env) => ({
	context: resolve(__dirname),
	entry: {
		index: resolve(__dirname, './index.js'),
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/',
		path: resolve(__dirname, './dist'),
	},
	resolve: {
		extensions: ['.js'],
		modules: [
			resolve(__dirname),
			'node_modules',
		],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ 'env', 'react' ]
					}
				},
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(env || 'development'),
			},
			PRODUCTION: JSON.stringify(false),
		}),
	],
});