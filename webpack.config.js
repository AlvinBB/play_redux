const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
  context: path.resolve(ROOT_PATH, 'src/'),
  entry: './index.jsx',
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  //babel重要的loader在这里
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  devtool: 'eval-source-map', //开发环境

  devServer: {
   compress: true, // 启用Gzip压缩
   historyApiFallback: true, // 为404页启用多个路径
   hot: true, // 模块热更新，配置HotModuleReplacementPlugin
   https: false, // 适用于ssl安全证书网站
   noInfo: true, // 只在热加载错误和警告
   // ...
 },

 plugins: [
   new HtmlwebpackPlugin({
    title: '记账本',
    template: '../build/template/index.html'
  })
 ],
};
