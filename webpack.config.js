const path = require('path')
const fs = require('fs')

let entryFile = {}


module.exports = {
  entry: './src/pages/index.js',
  output: {
    filename: '[name]_[chunkhash:6].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader'],
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
}