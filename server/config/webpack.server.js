const { resolve } = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = (env) => ({
	target: 'node',
	mode: 'development',
	context: resolve(__dirname),
	entry: {
		server: resolve(__dirname, '../src/server.tsx'),
	},
	output: {
		filename: 'order-test-server.js',
		publicPath: '/',
		path: resolve(__dirname, '../dist'),
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(env || 'development'),
			},
			PRODUCTION: JSON.stringify(false),
			__CLIENT__: JSON.stringify(false),
			__SERVER__: JSON.stringify(true),
			__dirname: JSON.stringify(__dirname),
		}),
		new CheckerPlugin(),
		new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })
	],
});