const path = require('path')
const fs = require('fs')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  output: {
    filename: 'dist/[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-source-map',
})