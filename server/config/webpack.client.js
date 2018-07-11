const { resolve } = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = (env) => ({
	mode: 'development',
	context: resolve(__dirname),
	entry: {
		client: resolve(__dirname, '../src/client.tsx'),
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/',
		path: resolve(__dirname, '../dist/public'),
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		modules: [
			resolve(__dirname, '../src'),
			'node_modules',
		],
	},
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				use: [
					{
						loader: 'awesome-typescript-loader',
						options: {
							useCache: true,
							forceIsolatedModules: true,
							reportFiles: [
								"src/**/*.{ts,tsx}"
							],
							//configFileName: '../../tsconfig.json',
							silent: true,
							declaration: false,
							allowJs: true,
						},
					},
				],
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
			__CLIENT__: JSON.stringify(true),
			__SERVER__: JSON.stringify(false),
		}),
		new CheckerPlugin(),
	],
});