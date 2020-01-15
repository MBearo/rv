const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require("webpack");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // 配置服务端目录和端口
  devServer: {
    contentBase: '../dist',
    port: 2333,
    hot: true,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
