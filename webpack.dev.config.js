const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './app/client/client.js',
  output: {
    path: './app/assets/javascripts/',
    filename: 'client.js',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
}
