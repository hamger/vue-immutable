# vue-immutable

A immutable data plugin for Vue.js


## Meaning

在编写 vue 代码的过程中，经常会遇到需要在模板中渲染一些不会改变的变量，由于需要在放到模板中，我们常常把这个变量放到 data 属性中，vue 会对  data 中的数据进行观察，这样便会造成将「数据」转换为「响应式对象」的性能开销，尤其是当这些数据较多且复杂时。因此有必要实现一种模式，既能跳过 vue 的观察机制，又能使变量可以在 vue 模板中被使用，vue-immutable 由此诞生 ，优化 vue 对 immutable 数据的处理，immutable 数据将被全局消费。

## Install

使用 npm 安装： `npm install vue-immutable`

使用 yarn 安装： `yarn add vue-immutable`

## Start

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
import Immutable from "vue-immutable";

Vue.use(Immutable);

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
```

```html
// App.vue
<template>
  <div id="app">
    <h1>{{ $immutable.msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: "App",
    immutable: {
      msg: "hello world",
    }
  };
</script>
```

## [Document](https://hamger.github.io/vue-immutable/)

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

### 2019.3.13

> v0.2.0 数据继承采用引用模式，废弃拷贝模式

### 2019.3.6

> v0.1.4 添加插件配置项 deep 

### 2019.2.4

> v0.1.3 实现 immutable 数据继承

### 2019.2.3

> v0.1.2 添加文档

> v0.1.0 项目初始化
