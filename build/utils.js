const path = require('path')
const glob = require('glob')

/**
 * 得到 webpack 的入口配置
 * @param {匹配路径} globPath 
 * @param {正则，用于过滤不需要的文件} reg 
 */ 
// 例如执行 getEntry('src/**/index.html') 会根据目录输出如下类似结果：
// { page01: './src/page01/index.html', page02: './src/page02/index.html' } 
exports.getEntry = (globPath, reg) => {
  const files = glob.sync(globPath)
  let entries = {}, entry, dirname
  for (let i = 0; i < files.length; i++) {
    entry = files[i]
    dirname = path.dirname(entry).split('/').pop()
    if (!reg) entries[dirname] = './' + entry
    if (reg && !reg.test(dirname)) entries[dirname] = './' + entry
  }
  return entries;
}

exports.resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
