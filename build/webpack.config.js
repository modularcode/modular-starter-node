const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config  = require('./config');

module.exports = {
  entry: [
    config.CLIENT_DIR + '/main.js'
  ],
  devtool: 'source-map',
  output: {
    path: config.DIST_DIR,
    filename: 'bundle/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: config.NPM_DIR,
        loader: 'babel',
      },
      {
        test:   /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass'),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle/bundle.css'),
  ],
  postcss: () => [autoprefixer({ browsers: 'last 2 version' })],
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['client', 'node_modules'],
    root: config.ROOT_DIR
  }
};
