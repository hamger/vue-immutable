<template>
  <div id="app">
    <h1>{{ immutable.author }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  immutable: {
    author: "hanger"
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
