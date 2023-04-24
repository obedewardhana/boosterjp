<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex mb-3 align-center justify-start">
          <v-icon large class="orange--text mr-3">mdi-controller</v-icon>
          <p class="text-h5 black--text text-medium mb-0">Games Terpopuler</p>
        </div>
      </v-col>
    </v-row>

    <v-row class="pt-0">
      <v-col cols="12" class="pt-0 mt-0" >
        <div class="scroll-x" style="padding-top:10px">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="content in contents"
            :key="content.brand"
            class="pb-5"
            style="display: inline-block"
          >
            <v-card
              elevation="3"
              color="dark"
              class="overflow-hidden hover-zoom"
            >
              <template v-if="content.type == 'hot'">
                <span class="card-ribbon-hot">{{ content.type }}</span>
              </template>
              <template v-else-if="content.type == 'new'">
                <span class="card-ribbon-new">{{ content.type }}</span>
              </template>
              <v-hover v-slot="{ hover }">
                <v-img
                  aspect-ratio="1"
                  contain
                  :src="content.src"
                  style="background-color: var(--v-lightgrey-base)"
                  :class="{ 'on-hover': hover }"
                >
                  <v-overlay absolute class="align-center justify-center">
                  </v-overlay>
                  <v-skeleton-loader
                    absolute
                    type="image"
                    v-if="isLoading"
                    class="fill-height"
                  >
                  </v-skeleton-loader>
                </v-img>
              </v-hover>
              <v-card-title class="pa-2"
                ><p class="text-small white--text text-uppercase mb-0 mx-auto">
                  {{ content.name }}
                </p>
              </v-card-title>
            </v-card>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PopularGamesComp",
  data() {
    return {
      tab: null,
      overlay: false,
      isLoading: true,
    };
  },
  props: {
    contents: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {},
  methods: {},
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>