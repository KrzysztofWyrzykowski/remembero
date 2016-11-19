var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: './',
    publicPath: '/assets/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },

  cache: true,
  debug: true,
  devtool: 'inline-source-map',

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', '!css-loader?sourceMap')
      }, {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', '!css-loader?sourceMap!sass-loader?outputStyle=expanded')
      }, {
        test: /\.(otf|eot|png|svg|jpg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  }
};
