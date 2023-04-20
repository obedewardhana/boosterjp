<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-tabs
          v-model="tab"
          height="70"
          background-color="lightgrey"
          center-active
          class="rounded"
          :show-arrows="true"
        >
          <v-tab
            :ripple="false"
            v-for="brand in brands"
            :key="brand.name"
            class="hover-white"
          >
            <v-img
              contain
              width="140"
              height="60"
              :src="brand.src"
              :lazy-src="brand.src"
            ></v-img>
          </v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="content in contents"
              :key="content.brand"
              style="padding: 25px 35px"
            >
              <div v-for="brand in brands" :key="brand.id">
                <template v-if="brand.name == content.name">
                  <v-row>
                    <v-col cols="6" sm="3" md="3" lg="2">
                      <v-card elevation="3" color="dark">
                        <template v-if="content.type == 'hot'">
                          <span class="card-ribbon-hot">{{
                            content.type
                          }}</span>
                        </template>
                        <template v-else-if="content.type == 'new'">
                          <span class="card-ribbon-new">{{
                            content.type
                          }}</span>
                        </template>
                        <v-hover v-slot="{ hover }">
                          <v-img
                            aspect-ratio="1"
                            contain
                            :src="content.src"
                            :lazy-src="content.src"
                            style="background-color: var(--v-lightgrey-base)"
                            :class="{ 'on-hover': hover }"
                            ><template v-slot:placeholder>
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
                            <v-overlay
                              absolute
                              class="align-center justify-center"
                            >
                              <p class="text-h6 text-center text-uppercase">
                                {{ content.name }}
                              </p>
                              <v-btn
                                color="orange"
                                class="hover-transparent "
                                @click.stop="
                                  $router
                                    .push('/' + content.url)
                                    .catch(() => {})
                                "
                                >Mulai Bermain</v-btn
                              >
                            </v-overlay>
                          </v-img>
                        </v-hover>
                        <v-card-title class="pa-2"
                          ><p
                            class="text-small white--text text-uppercase mb-0 mx-auto"
                          >
                            {{ content.name }}
                          </p>
                        </v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </template>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TabsComp",
  data() {
    return {
      tab: null,
      overlay: false,
    };
  },
  props: {
    brands: {
      type: Array,
      required: true,
      default: () => [],
    },
    contents: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {},
};
</script>
