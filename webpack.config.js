const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ProgressBar = require('progress-bar-webpack-plugin');


const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: '/dist',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader']},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            context: __dirname,
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ProgressBar()
    ]
};

module.exports = config;
