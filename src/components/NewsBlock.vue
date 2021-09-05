<template>
  <div>
    <div v-for="item in itemsForList" :key="item.id">
      <b-card
        :title="item.title"
        class="news_card"
      >

        <template #header>
            {{ item.author.name }}
        </template>

        <card-image v-if="item.image" ></card-image>

        <b-card-text class="card_text">
          {{ item.text }}
        </b-card-text>

        <template #footer>
          Created at {{ item.created_at }}
          <br />
          <p v-if="item.created_at !== item.updated_at">Last updated at {{ item.updated_at }}</p>
        </template>
        
      </b-card>
    </div>
  </div>
</template>

<script>
import CardImage from './CardImage.vue';
export default {
  components: { CardImage },
  props: {
    items: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {};
  },
  computed: {
    itemsForList() {
      return this.items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  }
};
</script>

<style>
.news_card {
  max-width: 50rem;
  margin: auto;
  margin-top: 20px;
}
</style>