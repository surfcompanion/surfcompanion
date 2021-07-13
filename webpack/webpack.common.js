const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
	entry: {
		"backgrounds/hot-reload": path.join(srcDir, "backgrounds/hot-reload.js"),
		"sites/instagram.com": path.join(srcDir, "sites/instagram.com.ts"),
		"sites/youtube.com": path.join(srcDir, "sites/youtube.com.ts"),
		//   popup: path.join(srcDir, 'popup.tsx'),
		//   options: path.join(srcDir, 'options.tsx'),
		//   background: path.join(srcDir, 'background.ts'),
		//   content_script: path.join(srcDir, 'content_script.tsx'),
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
				exclude: /node_modules/,
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
