const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./webpack.config.js');
const compiler = webpack(config);

const options = {
  contentBase: webpackDevConfig.output.publicPath,
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(webpackDevConfig, options);

const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});