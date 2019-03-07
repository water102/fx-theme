const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackCommon = require('./webpack.common');

module.exports = () => {
  var entry = {
    app: "./app/index.js"
  };

  var plugins = [
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/bundle/vendor-manifest.json')
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/**/*',
        to: '../'
      },
      {
        from: './template/*',
        to: '../',
        flatten: true
      }], {
        // debug: 'info'
      })
  ];

  return merge.smart(webpackCommon.getBaseConfig(), {
    entry,
    plugins,
    devServer: {
      contentBase: webpackCommon.PATHS.dist,
      port: 9000,
      disableHostCheck: true,
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
      https: false, // true for self-signed, object for cert authority
      //compress: true, // enable gzip compression      
      //noInfo: true, // only errors & warns on hot reload
      watchOptions: {
        // if you're using Docker you may need this
        // aggregateTimeout: 300,
        // poll: 1000,
        ignored: /node_modules/
      }
    }
  });
};
