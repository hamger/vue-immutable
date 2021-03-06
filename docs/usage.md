### 注入插件

vue-immutable 作为 vue 插件，使用方式和其他插件一致：

```js
import Vue from "vue";
import VueImmutable from "vue-immutable";
var options = { immutable: "$i" };
Vue.use(VueImmutable, options);

new Vue({
  el: "#app",
  immutable: {
    msg: "hello world"
  },
  components: { App },
  template: "<App/>"
});
```

> immutable 属性值应为一个对象或者返回一个对象的函数，该对象将被全局共享

options 是一个对象，选填，接受如下属性：

- immutable：选填，immutable 数据在 vue 实例中的映射，默认值为 `$immutable`

> 避免创建和映射名相同的响应式数据，因为同名的响应式数据会覆盖映射后的 immutable 数据

### 在 vue 实例中

在所有 vue 实例中都可以通过`$i`来访问。

```vue
// App.vue
<template>
  <div id="app">
    <h1>{{ $i.msg }}</h1>
  </div>
</template>
```

### 使用场景
项目中需要使用全局的不可变数据，此时很适合使用 vue-immutable 。
你还可以将全局函数注册在 immutable 数据中：
```js
// main.js
new Vue({
  el: '#app',
  immutable () {
    return {
      msg: "hello world",
      now () {
        return Date.now()
      }
    }
  },
  components: { App },
  template: '<App/>'
})
```
```vue
<template>
  <div id="app">
    <h1>{{ $i.msg }}</h1>
    <h1>{{ 'appTime: ' + $i.now() }}</h1>
  </div>
</template>
```
