const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const resolve = utils.resolve

var webpackConfig = {
  entry: utils.getEntry('demo/**/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name]-[hash:5].js'
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          resolve('src'),
          resolve('test')
        ]
      },
      {
        test: /.js$/,
        loaders: ['babel-loader'],
        include: [resolve('src'), resolve('demo')]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [resolve('src')]
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
        include: [resolve('demo')]
      },
      {
        test: /.s[c|a]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [resolve('demo')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('assets', '[name].[ext]')
        }
      }
    ]
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    // 配置控制台打印
    stats: {
      hash: false,
      assets: false,
      version: false,
      modules: false
    }
  },
  plugins: [new VueLoaderPlugin(), new webpack.HotModuleReplacementPlugin()]
}

// 在不同的页面中插入对应的js文件
var htmls = utils.getEntry('demo/**/index.html')
var pages = Object.keys(htmls)
pages.forEach(filename => {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${filename}/index.html`,
      template: htmls[filename],
      inject: true,
      chunks: [filename]
    })
  )
})

module.exports = webpackConfig
