<template>
  <div id="app">
    <h1>{{ i.hello }}</h1>
    <h1>{{ i.name }}</h1>
  </div>
</template>

<script>
  export default {
    name: "App",
    immutable: {
      hello: "hello",
      name() {
        return 'vue-immutable'
      }
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
