const path = require('path')
const fs = require('fs')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist')
  },
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-source-map',
})