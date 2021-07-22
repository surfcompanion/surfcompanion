const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
	entry: {
		popup: path.join(srcDir, "popup/main.tsx"),
		"backgrounds/hot-reload": path.join(srcDir, "backgrounds/hot-reload.js"),
		"sites/youtube.com": path.join(srcDir, "sites/youtube.com.ts"),
		//   options: path.join(srcDir, 'options.tsx'),
		//   background: path.join(srcDir, 'background.ts'),
	},
	output: {
		path: path.join(__dirname, "../dist/js"),
		filename: "[name].js",
	},
	optimization: {
		splitChunks: {
			name: "vendor",
			chunks: "initial",
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: [/node_modules/, /\.scss$/],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: ".", to: "../", context: "assets" }],
			options: {},
		}),
	],
};
