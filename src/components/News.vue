<template>
  <div class="news">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      msg: "News"
    };
  },
};
</script>

<style scoped>
h1 {
  margin: auto;
}
</style>
