# vue-immutable

A immutable data plugin for Vue.js

## Meaning

在编写 vue 代码的过程中，经常会遇到需要在模板中渲染一些不会改变的变量，由于需要在放到模板中，我们常常把这个变量放到 data 属性中，vue 会对  data 中的数据进行观察，这样便会造成不必要的性能消耗，尤其是当不变的数据较多且复杂时。因此有必要实现一种模式，既能跳过 vue 的观察机制，又能使变量可以在 vue 模板中被使用，vue-immutable 由此诞生 ，优化 vue 对 immutable 数据的处理。

## Document

vue-immutable 作为 vue 插件，使用方式和其他插件一致：`Vue.use(plugin, options)`。

options 是一个对象，接受如下属性：

- immutable：选填，immutable 数据在 vue 实例中的映射，默认值为 `immutable`

> 同名的响应式数据会覆盖 immutable 数据

## Development Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# package the code
npm run build

# run unit test
npm run test
```

## Changelog

### 2019.2.3

> v0.1.3 实现 immutable 数据继承

### 2019.2.3

> v0.1.2 添加文档

> v0.1.0 项目初始化
