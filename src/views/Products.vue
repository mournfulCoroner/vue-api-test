<template>
  <div class="products">
    <pagination :items="products" :perPage="3"></pagination>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import { gettingApi } from "@/api/api";

export default {
  components: { Pagination },
  name: "Products",
  data() {
    return {
      products: [],
      loading: false
    };
  },
  mounted() {
    gettingApi.getProducts().then((data) => {
      this.products = data;
    });
  },
};
</script>

<style scoped>
h1 {
  margin: auto;
}
</style>
