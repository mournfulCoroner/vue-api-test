<template>
  <div class="products">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      msg: "Products",
    };
  },
};
</script>

<style scoped>
h1 {
  margin: auto;
}
</style>
