var path = require('path');
var webpack = require('webpack');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./webpack/entry.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './assets/javascripts'),
    publicPath: "./assets/javascripts/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
