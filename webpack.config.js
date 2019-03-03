const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    module: {
        rules: [{
            test: [/\.js$/,  /\.jsx$/],
            exclude: /node_modules/,
            loader: "babel-loader",
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {}
            }]
        }]
    },
    devServer: {
        historyApiFallback: true,
        port: 5000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}