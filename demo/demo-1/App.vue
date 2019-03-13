<template>
  <div id="app">
    <el-hello></el-hello>
    <h1>{{ 'app: ' + $i.now() }}</h1>
  </div>
</template>

<script>
import Hello from './Hello.vue'

export default {
  name: "App",
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
