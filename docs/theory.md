vue-immutable 需要实现两点：

1. 能在 vue 模板中被访问到
2. 跳过 vue 的观察机制

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
      msg: "hello world",
    }
  };
</script>
```
这样就实现了第一点，因为 vue 不会对除 data 和 props 之外的数据进行观察，所以也就实现了第二点。

但是使用`$options.immutable`有些太麻烦了，所以需要做一下代理，此时可以定制映射关系，我们在 vue 的生命周期`beforeCreate`中混入我们的操作：
```js
// map 为设置的映射值
this[map] = {}
const immutable = this.$options.immutable
if (immutable) shallowCopy(this[map], immutable)

function shallowCopy (b, a) {
  for (let k in a) b[k] = a[k]
  return b
}
```
此后就可以使用`map.key`代替`$options.immutable.key`了。

至此我们就已经实现了基本功能了，但是现在 immutable 数据还无法被继承，要实现继承，需要将父实例的 immutable 数据传子实例，需要拓展在`beforeCreate`中混入的操作：
```js
const options = this.$options
this[map] = {}
if (options.parent && options.parent.$options.immutable) {
  shallowCopy(this[map], options.parent.$options.immutable)
}
const immutable = options.immutable
if (immutable) shallowCopy(this[map], immutable)
const _immutable = options._immutable
if (_immutable) shallowCopy(this[map], _immutable)
```
这样就实现了 immutable 数据可以被继承，同时创建 _immutable 数据只供自身消费。
