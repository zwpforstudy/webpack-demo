const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
// const webpack = require('webpack')
// const CleanWebpackPlugin = require('clean-webpack-plugin');

let entry = {}
Object.getOwnPropertyNames((webpackBaseConfig.entry || {})).map(function (name) {
  entry[name] = []
    // .concat("webpack/hot/dev-server")//添加HMR文件
    .concat("webpack-dev-server/client?http://localhost:5000") //添加webpack-dev-server客户端
    .concat(webpackBaseConfig.entry[name])
});

module.exports = webpackMerge(webpackBaseConfig, {
  entry: entry,
  mode: 'development',
  output: {
    filename: 'dist/[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-source-map',
  plugins: [
    //添加HMR插件
    // new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin('dist')
  ]
})