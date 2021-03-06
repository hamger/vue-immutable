vue-immutable 需要实现三点：

1. immutable 数据能在 vue 模板中被访问到
2. immutable 数据跳过 vue 的观察机制
3. immutable 数据可以被全局共享

### 实现前两点

我们知道 vue 的 template 中的 this 指向 vue 实例，因此只要将 immutable 数据挂在 vue 实例上，就可以实现在模板中访问到 immutable 数据。

那么如何将 immutable 数据挂到 vue 实例上呢？通过阅读 Vue 文档可知，实例的配置项都会被收集在 `vm.$options` 中，也就是说，在实例的配置项中加入的`immutable`属性，可以通过`vm.$options.immutable`被访问到，如以下代码：

```vue
<template>
  <div>
    <h1>{{ $options.immutable.msg }}</h1>
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

这样就实现了第一点，因为 vue 不会对除 data 和 props 之外的数据进行观察，所以也就实现了第二点。

但是使用`$options.immutable`有些麻烦，所以需要做一下代理，此时可以定制映射关系，我们在 vue 的生命周期`beforeCreate`中混入我们的操作：

```js
// map 为设置的映射值
const immutable = this.$options.immutable;
if (immutable) this[map] = immutable;
```

此后就可以使用`map.key`代替`$options.immutable.key`了。

### 实现第三点

然后我们来实现第三点，这里可以采用 Vuex 中的思路，将子实例的`map`属性指向父实例的`map`属性即可，需要拓展在`beforeCreate`中混入的操作：

```js
const options = this.$options;
if (options.immutable) {
  this[map] =
    typeof options.immutable === "function"
      ? options.immutable()
      : options.immutable;
} else if (options.parent && options.parent[map]) {
  this[map] = options.parent[map];
}
```

在根实例上挂载 immutable 属性，这样就实现了 immutable 数据的全局共享。
