const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackCommon = require('./webpack.common');

module.exports = () => {
  var entry = {
    vendor: [
      // support old browser, IE
      '@babel/polyfill',

      // js
      'jquery',
      'popper.js',
      'bootstrap',
      'bootstrap-datepicker',
      'chart.js',

      // css
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
    ]
  };

  var output = {
    library: '[name]_[hash]'
  };

  var plugins = [
    new CleanWebpackPlugin(['dist']),
    new webpack.DllPlugin({
      path: path.join(webpackCommon.PATHS.bundle, '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ];

  return merge.smart(webpackCommon.getBaseConfig(), {
    entry,
    output,
    plugins
  });
};
