<template>
  <div>
    <div v-for="item in itemsForList" :key="item.id">
      <b-card
        :title="item.name"
        :sub-title="item.product_type"
        class="product_card"
      >

        <card-image :src="item.image"></card-image>

        <b-card-text v-html="item.description" class="card_text">
          <!-- {{ item.description }} -->
        </b-card-text>

        <b-card-text> Цена: {{ item.price }}</b-card-text>
        <template #footer>
          Created at {{ item.created_at }}
          <br />
          <p v-if="item.created_at !== item.updated_at">
            Last updated at {{ item.updated_at }}
          </p>
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
    }
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
.product_card {
  max-width: 50rem;
  margin: 20px auto;
}
</style>