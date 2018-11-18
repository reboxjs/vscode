var glob = require('glob');
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');


var glob_entries1 = function (globPath) {
	var files = glob.sync(globPath);
	var entries = {};

	for (var i = 0; i < files.length; i++) {
		var entry = files[i];
		var pathObj = path.parse(entry);
		entries[path.join(pathObj.dir.replace(new RegExp('^\.\/out\/', ''), ''), pathObj.name)] = entry;
	}
	console.log(entries);
	return entries;
};

var webpack_opts = {
	entry: glob_entries1("./out/vs/base/[n|c]*/**/*.js"),
	mode: 'none',
	target: 'node',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist-vs-base-node'),
		library: '@vscode/vs-base-node',
		libraryTarget: "commonjs2"
	},
	resolve: {
		extensions: ['.ts', '.js'],
		modules: [
			'node_modules',
			'out',
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				test: /\.ts$/,
				ts: {
					compiler: 'typescript',
					configFileName: 'tsconfig.json'
				},
				tslint: {
					emitErrors: true,
					failOnHint: true
				}
			}
		}),
		// copy .d.ts to dest location
		new CopyWebpackPlugin([
			{
				context: './dist/src',
				from: {
					glob: 'vs/base/[n|c]*/**/*.d.ts',
					dot: false
				},
				to: path.resolve(__dirname, 'dist-vs-base-node')
			},
			{
				from: './config/packages/vsBaseNode-package.json',
				to: path.join(path.resolve(__dirname, 'dist-vs-base-node'), 'package.json')
			}
		])
	],
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{
				// vscode-nls-dev loader:
				// * rewrite nls-calls
				loader: 'vscode-nls-dev/lib/webpack-loader',
				// options: {
				// 	base: path.join(extConfig.context, 'src')
				// }
			}, {
				// configure TypeScript loader:
				// * enable sources maps for end-to-end source maps
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						"sourceMap": true,
					}
				}
			}]
		},
		{
			test: /\.json?$/,
			loader: 'json-loader'
		},
		{
			test: /\.sh$/,
			loader: 'raw-loader'
		}
		]
	},
	externals: [
		{ 'vscode': 'commonjs vscode' }, // ignored because it doesn't exist
		nodeExternals()
	]

	// "vscode-extension-telemetry": 'commonjs vscode-extension-telemetry', // commonly used
// },
};

module.exports = webpack_opts;
