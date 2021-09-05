<template>
  <div>
    <div>
      <b-card-img
        v-show="!isLoading"
        :src="src"
        alt="Image"
        class="card_image"
        @error="hideImg"
        @load="imgLoaded"
        center
      ></b-card-img>
      <b-row class="justify-content-center">
        <b-skeleton-img
          v-if="isLoading && !isBroken"
          width="15em"
          height="15em"
          center
        ></b-skeleton-img>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: require('./../assets/no-image.jpg'),
    }
  },
  data() {
    return {
      isBroken: false,
      isLoading: true
    };
  },
  methods: {
    hideImg() {
      this.isBroken = true;
    },
    imgLoaded() {
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.card_image {
  width: 15em;
}
</style>
