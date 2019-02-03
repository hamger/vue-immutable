# vue-immutable

A immutable data plugin for Vue.js

## Meaning

在编写 vue 代码的过程中，经常会遇到需要在模板中渲染一些不会改变的变量，由于需要在放到模板中，我们常常把这个变量放到 data 属性中，在 data 中的数据会被响应化，这样便会造成不必要的性能消耗，尤其是当不变的数据较多且复杂时。因此有必要实现一种模式，既能跳过 vue 的检测机制，又能使变量可以在 vue 模板中被使用，由此就诞生了 vue-immutable 。

## Usage

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
import Immutable from "vue-immutable";

Vue.use(Immutable, { immutable: "i" });

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
    <h1>{{ i.msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: "App",
    immutable: {
      msg: "hello world"
    }
  };
</script>
```

## Document

vue-immutable 作为 vue 插件，使用方式和其他插件一致：`Vue.use(plugin, options)`。

options 是一个对象，接受如下属性：

- immutable：选填，immutable 数据在 vue 实例中的映射，默认值为 `immutable`
- data：选填，供全局消费的 immutable 数据

> 同名的响应式数据会覆盖 immutable 数据

> 局部的 immutable 数据会覆盖全局的 immutable 数据

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

> v0.1.0 项目初始化
