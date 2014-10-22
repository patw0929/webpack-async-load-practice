// webpack.config.js
var path = require('path');
var webpack = require('webpack');

var appRoot = path.join(__dirname, 'app');
var bowerRoot = path.join(__dirname, 'bower_components');
var nodeRoot = path.join(__dirname, 'node_modules');

module.exports = {
  entry: {
    index: 'index',
    two: 'two'
  },
  output: {
    path: path.resolve('./static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    root: [appRoot, nodeRoot, bowerRoot],
    alias: {
      jQuery: "jquery"
    },
    extensions: ['', '.js', '.html', '.css', '.scss']
  },
  resolveLoader: {
    root: [nodeRoot, bowerRoot]
  },
  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/,    loader: 'style!css!autoprefixer' },
      { test: /\.scss$/,   loader: 'style!css!autoprefixer!sass' },
      { test: /\.png$/,    loader: "url-loader?limit=10000&mimetype=image/png" }
    ]
  }
};
