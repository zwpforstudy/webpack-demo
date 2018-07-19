const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./webpack.dev.config.js');
const compiler = webpack(webpackDevConfig);

/*
 * 自动编译刷新：https://www.cnblogs.com/hhhyaaon/p/5664002.html
 * "start": "webpack-dev-server --hot --inline --port 5000 --config ./config/webpack.dev.config.js"(cli 配置，但是
 * 入口文件没找到)
 */

const options = {
    // contentBase: webpackDevConfig.output.publicPath,
    // publicPath: '/',//设置浏览器打开首页
    publicPath: webpackDevConfig.output.publicPath,
    // hot: true,//HMR配置
    inline: true,
    open: true,
    historyApiFallback: true,
};

webpackDevServer.addDevServerEntrypoints(webpackDevConfig, options);

const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});
