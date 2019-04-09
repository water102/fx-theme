const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackCommon = require('./webpack.common');

module.exports = () => {
  var entry = {
    vendor: [
      // support old browser, IE
      'core-js',
      'regenerator-runtime',

      // js
      'jquery',
      'popper.js',
      'bootstrap',

      // plugins
      // 'chart.js',
      // 'moment.js',

      // react-all
      'redux',
      'redux-logger',
      'redux-thunk',

      'react',
      'react-dom',
      'react-router-dom',

      'react-helmet',
      'react-redux',
      'react-localize-redux'
    ],
    theme: [
      './style/theme/base/style',
      './style/theme/default/style'
    ],
    loading: ['./style/loading.scss']
  };

  var output = {
    library: '[name]_[hash]'
  };

  var plugins = [
    new CleanWebpackPlugin(),
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
