<template>
  <div>
    <div v-for="item in itemsForList" :key="item.id">
      <b-card
        :title="item.name"
        :sub-title="item.product_type"
        class="product_card"
      >
        <b-row>
          <b-col>
            <b-card-img
              v-if="item.image"
              :src="item.image"
              alt="Image"
              class="card_image"
              left
            ></b-card-img>
          </b-col>
          <b-col>
            <b-card-text class="card_text">
              {{ item.description }}
            </b-card-text>
            </b-col>
          </b-row>
          <b-row>
        <b-card-text> Цена: {{ item.price }}</b-card-text></b-row>
        <template #footer>
          Created at {{ item.created_at }}
          <br />
          Last updated at {{ item.updated_at }}
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      require,
    },
    currentPage: {
      type: Number,
      require
    },
    perPage: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
    }
  },
  computed: {
    itemsForList(){
        return this.items.slice( (this.currentPage - 1) * this.perPage,
      this.currentPage * this.perPage)}
  }
};
</script>

<style scoped>
.product_card {
  max-width: 50rem;
  margin: auto;
  margin-top: 20px;
}
.card_image {
  width: 15em;
}
.card_text {
  text-overflow: ellipsis;
}
</style>