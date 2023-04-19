<template>
  <div>
    <v-img :src="image" :lazy-src="image" style="min-height: 100% !important">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey-lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "BannerComp",
  data() {
    return {};
  },
  props: {
    image: String,
  },
};
</script>
