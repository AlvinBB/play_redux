const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './client.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'client/public/index.html' }),
        new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
        // new CleanWebpackPlugin(['dist'])
    ],
    // devServer: {
    //     contentBase: '../dist',
    //     host: '127.0.0.1',
    //     hot: true,
    //     port: '8080',
    // }
};