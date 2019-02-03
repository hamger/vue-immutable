# vue-immutable
A immutable data plugin for Vue.js

## Usage
```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import Immutable from 'vue-immutable'
Vue.use(Immutable, {immutable: 'i'})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
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

## Development Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# package the code
npm run build

# run unit test
npm run test
```
