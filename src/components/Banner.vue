<template>
  <div>
    <v-img :src="image" style="min-height: 100% !important">
      <v-skeleton-loader
        absolute
        type="image"
        v-if="isLoading"
        class="fill-height"
      >
      </v-skeleton-loader>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "BannerComp",
  data() {
    return {
      isLoading: true,
    };
  },
  props: {
    image: String,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
