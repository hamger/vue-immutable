## 注入插件

vue-immutable 作为 vue 插件，使用方式和其他插件一致：

```js
import Vue from "vue";
import Immutable from "vue-immutable";
var options = { immutable: "i" };
Vue.use(Immutable, options);
```

options 是一个对象，选填，接受如下属性：

- immutable：选填，immutable 数据在 vue 实例中的映射，默认值为 `immutable`

- deep：选填，immutable 数据在继承时是否使用深拷贝，默认值为 `false`

> 同名的响应式数据会覆盖映射后的 immutable 数据

## 在 vue 实例中

```vue
// App.vue
<template>
  <div id="app">
    <el-hello></el-hello>
    <h1>{{ i.now() }}</h1>
  </div>
</template>

<script>
  import Hello from "./Hello.vue";

  export default {
    name: "App",
    immutable: {
      root: "App",
      now() {
        return Date.now();
      }
    },
    _immutable: {
      now() {
        return new Date();
      }
    },
    components: {
      "el-hello": Hello
    }
  };
</script>
```

`immutable`属性的值会被子组件继承，而`_immutable`属性的值不会被继承，两者存在同名属性时，优先使用`_immutable`里的属性。

```vue
// Hello.vue
<template>
  <div>
    <h1>{{ i.root }}</h1>
    <h1>{{ i.now() }}</h1>
  </div>
</template>

<script>
  export default {
    name: "Hello",
    created() {
      console.log(this.i);
    }
  };
</script>
```
