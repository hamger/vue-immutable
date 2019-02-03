const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const utils = require('./utils')
const resolve = utils.resolve

var webpackConfig = {
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'vue-immutable.min.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'vue-immutable',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('demo')]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}

module.exports = webpackConfig
