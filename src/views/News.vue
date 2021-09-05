<template>
  <div class="news">
    <pagination :items="news" :perPage=3 ></pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import { gettingApi } from '@/api/api'

export default {
  components: { Pagination },
  name: "News",
  data() {
    return {
      msg: "News",
      news: []
    };
  },
  mounted(){
    gettingApi.getNews().then((data) => {
      this.news = data;
    });
  }
};
</script>

<style scoped>
h1 {
  margin: auto;
}
</style>
