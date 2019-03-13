### 诞生场景

数据展示的时候，考虑某些数据不存在的情况，需要展示一个默认的文本，且这个默认的文本在所有组件中都是一致的，你可能会这么写。

```js
// a.js
export { nothing: '--' }
```

```vue
// App.vue
<template>
  <div id="app">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} 的年龄为 {{ item.age || nothing }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nothing } from "a.js";

export default {
  name: "App",
  data() {
    return {
      nothing: nothing,
      list: [
        {
          id: 1,
          name: "Tom",
          age: 23
        },
        {
          id: 2,
          name: "Mary",
          age: ""
        }
      ]
    };
  }
};
</script>
```

### 使用 Vuex
但是以上写法存在一个问题，对于每一个组件都需要引入`a.js`，且还需要将数据放到 data 属性里，很是繁琐，这时你可能会想到使用 Vuex
。

```
// App.vue
<template>
  <div id="app">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.name}} 的年龄为 {{item.age || $store.state.nothing}}
      </li>
    </ul>
  </div>
</template>
```

### 使用 vue-immutable
确实使用 Vuex 就不需要每次都去引入`a.js`了，但是这里大材小用了，Vuex 主要是用来处理可变的全局变量，它会将「数据」转换为「响应式对象」，这个过程存在性能开销，尤其是当这些数据较多且复杂时。vue-immutable 由此诞生，使用 vue-immutable 后既可以使数据被全局共享，也可以避免「数据」转换为「响应式对象」的性能开销。

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
import Immutable from "vue-immutable";

Vue.use(Immutable);

new Vue({
  el: "#app",
  // 在根实例注册 immutable 数据，可被全局共享
  immutable: { nothing: "--" },
  components: { App },
  template: "<App/>"
});
```

```vue
// App.vue
<template>
  <div id="app">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} 的年龄为 {{ item.age || $immutable.nothing }}
      </li>
    </ul>
  </div>
</template>
```
