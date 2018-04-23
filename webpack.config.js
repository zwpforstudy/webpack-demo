const path = require('path')
const fs = require('fs')

// const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
const url = path.resolve(__dirname, 'src/pages')

let entryFile = {}

function readFileFun() {
  var files = fs.readdirSync(url)
  files.forEach((file) => {
    var name = file.split('.js')[0]
    entryFile[name] = path.resolve(url) + '/' + file + '/index.js'
  })
}

readFileFun()
console.log('entryFile', entryFile)
module.exports = {
  entry: entryFile,
  output: {
    filename: '[name]_[chunkhash:6].js',
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
  }
}