const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/main.js"
    },
    devServer: {
        contentBase: "dist"
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/template.html'
        })
    ]
}