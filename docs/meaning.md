在编写 vue 代码的过程中，需要在模板中渲染数据，这些数据是不会改变的，我们会把这些数据放到 data 属性中：
```vue
<template>
  <div id="app">
    <h1>{{ who }}</h1>
  </div>
</template>

<script>
var name = 'tom'
export default {
  name: "App",
  data () {
    return {
      who: name,
    }
  }
};
</script>
```
以上代码自然是可以达到目的的，但 vue 会对 data 中的数据进行观察，我们知道这些数据是不会变的，这样便会造成不必要的性能消耗，尤其是当这些数据较多且复杂时。因此有必要实现一种模式，既能跳过 vue 的观察机制，又能使变量可以在 vue 模板中被使用，vue-immutable 由此诞生，旨在优化 vue 对 immutable 数据的处理。
使用 vue-immutable 后可以改写为以下代码：
```vue
<template>
  <div id="app">
    <h1>{{ immutable.who }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  immutable: {
    who: 'tom'
  }
};
</script>
```
对于不变化的数据不在需要放在 data 中，从而节省了 vue 数据观察的消耗。
