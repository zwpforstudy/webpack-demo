const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const url = path.resolve(__dirname, 'src/pages')
let entryFile = {}
let plugins = []

function readFileFun() {
  var files = fs.readdirSync(url)
  files.forEach((file) => {
    var name = file.split('.js')[0]

    plugins.push(new HtmlWebpackPlugin({
      // 生成出来的html文件名
      filename: name + '.html',
      template: './template.html',// 每个html的模版，这里多个页面使用同一个模版
      inject: true, // 自动将引用插入html
      chunks: [name],// 每个html引用的js模块，也可以在这里加上vendor等公用模块
      minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }));
    entryFile[name] = path.resolve(url) + '/' + file + '/index.js'
  })
}

readFileFun()

module.exports = {
  entry: entryFile,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    symlinks: false
  },
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-source-map',
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
    },
      //   {
      //   test: /\.js$/,
      //   include: url,
      //   loader: "babel-loader"
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 生成出来的html文件名
      filename: name + '.html',
      template: './template.html',// 每个html的模版，这里多个页面使用同一个模版
      inject: true, // 自动将引用插入html
      chunks: [name],// 每个html引用的js模块，也可以在这里加上vendor等公用模块
      minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    })
  ]
}