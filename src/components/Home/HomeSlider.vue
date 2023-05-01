<template>
  <v-carousel
    cycle
    hide-delimiter-background
    :show-arrows="false"
    height="auto"
    contained
  >
    <v-carousel-item
      cover
      v-for="(image, i) in images"
      :key="i"
      :src="image.src"
    >
      <v-skeleton-loader
        absolute
        type="image"
        v-if="isLoading"
        class="fill-height"
      >
      </v-skeleton-loader>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import urlPublic from '../../utilities/axios-public';
export default {
  name: "HomeSliderComp",
  data() {
    return {
      images: [
        {
          src: `${process.env.VUE_APP_BE_URL}images/banner1.png`,
        },
        {
          src: `${process.env.VUE_APP_BE_URL}images/banner2.png`,
        },
        {
          src: `${process.env.VUE_APP_BE_URL}images/banner3.png`,
        },
        {
          src: `${process.env.VUE_APP_BE_URL}images/banner1.png`,
        },
      ],
      isLoading: true,
    };
  },
  methods: {
    async banner() {
      await urlPublic.get('banner')
      .then((res) => {
        const data = res.data.data;
        this.images = data;
      })
    }
  },
  mounted() {
    this.banner();
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>