<template>
  <v-carousel
    cycle
    hide-delimiter-background
    :show-arrows="false"
    height="520"
    contain
    style="margin-top: 103px; min-height: 100% !important"
  >
    <v-carousel-item
      cover
      v-for="(image, i) in images"
      :key="i"
      :src="image.src"
      :lazy-src="image.src"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey-lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HomeSliderComp",
  data() {
    return {
      images: [
        {
          src: "https://dummyimage.com/3198x1200/eb9150/ffffff.png",
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
    };
  },
};
</script>