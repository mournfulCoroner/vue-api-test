<template>
  <div class="overflow-auto">
    <div class="mt-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        pills
        aria-controls="cards"
        class="m-20"
        align="center"
      ></b-pagination>
    </div>
    <!-- <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table> -->
    <product-block id="cards" :items="items" :per-page="perPage"
      :current-page="currentPage"></product-block>
     
  </div>
</template>

<script>
import ProductBlock from './ProductBlock.vue';
export default {
  components: { ProductBlock },
  props: {
    items: {
      type: Array,
      require,
    },
    perPage: {
      type: Number,
      default: 9,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>