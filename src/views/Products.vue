<template>
  <div class="products">
    <pagination :items="[{ id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' }]"></pagination>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue';
export default {
  components: { Pagination },
  name: "Products"
};
</script>

<style scoped>
h1 {
  margin: auto;
}
</style>
