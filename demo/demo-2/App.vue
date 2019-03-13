<template>
  <div id="app">
    <ul>
      <li v-for="item in list" :key="item.id">{{item.name}} 的年龄为 {{item.age || $immutable}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [
        {
          id: 1,
          name: "Tom",
          age: 23
        },
        {
          id: 2,
          name: "Mary",
          age: ""
        }
      ]
    };
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
