var glob = require('glob');
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const dest_path = 'out/base-node';


const search_path = "./src/vs/base/[n|c]*/**/*.[t|j]s";
var glob_entries = function (globPath) {
	var files = glob.sync(globPath, { ignore: './src/**/*.d.ts' });
	var entries = { 'vs/nls': './src/vs/nls.mock' };

	for (var i = 0; i < files.length; i++) {
		var entry = files[i];
		var pathObj = path.parse(entry);
		entries[path.join(pathObj.dir.replace(new RegExp('^\.\/src\/', ''), ''), pathObj.name)] = entry;
	}
	return entries;
};

const keys = Object.keys(glob_entries(search_path));
var external_entries = () => (context, request, callback) => {
	if (keys.includes(request)) {
		const relativePath = `./${path.relative(context, path.join(process.cwd(), 'src', request))}`;
		console.log('path is included', relativePath);
		// mark this module to relative and as external
		return callback(null, 'commonjs' + " " + relativePath);
	}
	callback();
};

var webpack_opts = {
	entry: glob_entries(search_path),
	mode: 'none',
	target: 'node',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, dest_path),
		library: '@vscode/base-node',
		libraryTarget: "commonjs"
	},
	resolve: {
		extensions: ['.ts', '.js'],
		modules: [
			'node_modules',
			'out',
		],
		plugins: [
			new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, 'tsconfig.json') }),
		]
	},
	plugins: [
		// copy .d.ts to dest location
		new CopyWebpackPlugin([
			{
				context: './src',
				from: {
					glob: 'vs/base/[n|c]*/**/*.d.ts',
					dot: false
				},
				to: path.resolve(__dirname, dest_path)
			},
			{
				from: './config/packages/vsBaseNode-package.json',
				to: path.join(path.resolve(__dirname, dest_path), 'package.json')
			},
			{
				context: './src',
				from: './typings',
				to: path.join(path.resolve(__dirname, dest_path), 'typings')
			},
			{
				from: './config/packages/vsBaseNode-tsconfig.json',
				to: path.join(path.resolve(__dirname, dest_path), 'tsconfig.json')
			},
			{
				context: './src',
				from: './tsconfig.base.json',
				to: path.join(path.resolve(__dirname, dest_path), 'tsconfig.base.json')
			},
		])
	],
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [
				{
					// configure TypeScript loader:
					// * enable sources maps for end-to-end source maps
					loader: 'ts-loader',
					options: {
						configFile: 'webpack-tsconfig.json',
						compilerOptions: {
							"sourceMap": true,
							// "outDir": "../vs",
							"declaration": true,
							// "declarationDir": "../vs/base"
						},
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
		nodeExternals(),
		external_entries(),
	]

	// "vscode-extension-telemetry": 'commonjs vscode-extension-telemetry', // commonly used
	// },
};

module.exports = webpack_opts;
