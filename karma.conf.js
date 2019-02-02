// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],
    // 把 files 中的文件在 browsers 里面跑，使用 frameworks 测试js, 通过reporters输出报告
    files: ['test/**/*.js'],
    
    exclude: [],

    // 为文件制定预处理器，测试index.js之前用 webpack 处理一下
    preprocessors: {
      'test/**/*.js': ['webpack']
    },

    // 规定报告方式
    reporters: ['progress', 'coverage'],
    
    // 规定覆盖报告存放位置
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    port: 9876,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // 这里使用的是PhantomJS作为浏览器测试环境
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpack: {
      entry: './src/index.js',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015'],
              plugins: ['istanbul']
            }
          }
        ]
      }
    }
  })
}
