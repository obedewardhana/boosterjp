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
              transition="slide-x-reverse-transition"
            >
              <div v-for="brand in brands" :key="brand.id">
                <template v-if="brand.name == content.name" >
                  <v-row>
                    <v-col cols="6" sm="3" md="3" lg="2">
                      <v-card
                        elevation="3"
                        color="dark"
                        class="overflow-hidden"
                      >
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
                            style="background-color: var(--v-lightgrey-base)"
                            :class="{ 'on-hover': hover }"
                          >
                            <v-overlay
                              absolute
                              class="align-center justify-center"
                            >
                              <v-btn
                                color="orange"
                                class="hover-transparent rounded-lg"
                                @click.stop="loginFirst"
                                ><p class="text-p text-capitalize mb-0">
                                  Mulai Bermain
                                </p></v-btn
                              >
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
import swal from "sweetalert2";
window.Swal = swal;
export default {
  name: "TabsComp",
  components: { swal },
  data() {
    return {
      tab: null,
      overlay: false,
      isLoading: true,
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
  methods: {
    loginFirst() {
      // $swal function calls SweetAlert into the application with the specified configuration.
      Swal.fire(
        "Silahkan Login!",
        "Silahkan Login sebelum bermain.",
        "warning"
      );
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
