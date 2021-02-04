const path = require("path");
const webpackHtmlPlugin = require("html-webpack-plugin")

module.exports = {
    entry: ["@babel/polyfill", "./src/scripts/index.js"],
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: "./dist/bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    plugins: [
        new webpackHtmlPlugin({
            template: './src/index.html'
        })
    ],
};