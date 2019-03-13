## Install

使用 npm 安装： `npm install vue-immutable`

使用 yarn 安装： `yarn add vue-immutable`

## Demo

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
import Immutable from "vue-immutable";

Vue.use(Immutable);

new Vue({
  el: "#app",
  immutable: {
    msg: "hello world",
  },
  components: { App },
  template: "<App/>"
});
```

```vue
// App.vue
<template>
  <div id="app">
    <h1>{{ $immutable.msg }}</h1>
  </div>
</template>
```
