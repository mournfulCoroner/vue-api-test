<template>
  <div class="news">
    <pagination :items="[{ id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 5, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 6, first_name: 'Barney', last_name: 'Rubble' }]" :perPage=3 ></pagination>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue';
export default {
  components: { Pagination },
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
