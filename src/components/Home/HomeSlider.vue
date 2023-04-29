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
          src: "../../src/img/banner1.png",
        },
        {
          src: "https://dummyimage.com/3198x1200/eb9150/ffffff.png",
        },
        {
          src: "https://dummyimage.com/3198x1200/eb9150/ffffff.png",
        },
        {
          src: "https://dummyimage.com/3198x1200/eb9150/ffffff.png",
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