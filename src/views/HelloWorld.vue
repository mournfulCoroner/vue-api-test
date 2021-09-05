<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "This is the test task with Vue and Bootstrap"
    };
  }
};
</script>

<style scoped>
h1 {
  margin: auto;
}
</style>
