<template>
  <v-carousel cycle hide-delimiter-background :show-arrows="false" height="auto" style="margin-top:103px">
    <v-carousel-item cover v-for="(image, i) in images" :key="i" :src="image.src">
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