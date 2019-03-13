const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const utils = require('./utils')
const resolve = utils.resolve

var webpackConfig = {
  entry: './src/index.js',
  output: {
    filename: 'vue-immutable.min.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'vueImmutable',
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
  },
  resolve: {
    extensions: ['.js'],
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
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}

module.exports = webpackConfig
