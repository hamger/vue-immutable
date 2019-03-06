<template>
  <div id="app">
    <h1>{{ i.hello }}</h1>
    <h1>{{ i.root }}</h1>
    <h1>{{ i.now() }}</h1>
  </div>
</template>

<script>
  export default {
    name: "Hello",
    immutable: {
      hello: "hello"
    },
    created () {
      console.log(this.i)
      this.i.a.b = 5
      console.log(this.$parent.i.a.b)
    }
  };
</script>
