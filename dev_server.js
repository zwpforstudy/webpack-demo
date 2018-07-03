const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./webpack.config.js');
const compiler = webpack(webpackDevConfig);
console.log('webpackDevConfig', webpackDevConfig)

console.log('publicPath', webpackDevConfig.output.publicPath)
const options = {
    contentBase: webpackDevConfig.output.publicPath,
    publicPath: '/',//设置浏览器打开首页
    hot: true,
    host: 'localhost',
    // index: './index',
    inline: true,
    open: true,
    overlay: {
        // warnings: true,
        errors: true
    },
    noInfo: true,
    stats: {
        colors: true
    }
};

webpackDevServer.addDevServerEntrypoints(webpackDevConfig, options);

const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});
