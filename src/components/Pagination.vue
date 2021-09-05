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

    <product-block v-if="pageInfo === 'Products'" id="cards" :items="items" :per-page="perPage"
      :current-page="currentPage" ></product-block>
    <news-block v-else id="cards" :items="items" :per-page="perPage"
      :current-page="currentPage"></news-block>
     
  </div>
</template>

<script>
import NewsBlock from '@/components/NewsBlock.vue'
import ProductBlock from '@/components/ProductBlock.vue'

export default {
  components: { ProductBlock, NewsBlock },
  props: {
    items: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 9,
    },
    pageInfo: {
        type: String,
        default: 'Products'
    }
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