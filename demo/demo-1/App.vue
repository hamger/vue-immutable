<template>
  <div id="app">
    <el-hello></el-hello>
    <h1>{{ i.now() }}</h1>
  </div>
</template>

<script>
import Hello from './Hello.vue'

export default {
  name: "App",
  immutable: {
    root: "App",
    now() {
      return Date.now()
    }
  },
  _immutable: {
    now() {
      return new Date()
    }
  },
  components: {
    'el-hello': Hello
  },
};
</script>

<style lang="scss" scope>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
