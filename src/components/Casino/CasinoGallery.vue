<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="pt-2 pb-7">
          <v-row class="px-0 py-0">
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="4"
              v-for="cas in casino"
              :key="cas.id"
              class="px-0 py-0 pr-2 pr-md-2 pr-lg-2 pl-2 pl-sm-2 pl-md-0 pl-lg-0 pb-2"
              style="overflow: hidden"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  contain
                  height="auto"
                  elevation="4"
                  :aspect-ratio="16/9"
                  :src="cas.src"
                  :lazy-src="cas.src"
                  :class="{ 'on-hover': hover }"
                  style="position: relative;"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-overlay absolute class="align-center justify-center">
                    <v-btn
                      color="orange"
                      class="hover-transparent"
                      @click.stop="$router.push('/' + cas.url).catch(() => {})"
                      >Mulai Bermain</v-btn
                    >
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  <script>
export default {
  name: "CasinoGalleryComp",
  data() {
    return {
      overlay: false,
    };
  },
  props: {
    casino: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
  