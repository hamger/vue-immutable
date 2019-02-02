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

<style lang="scss" scope>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
