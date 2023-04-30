<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="pt-7 pb-4">
          <v-row
            class="flex-wrap flex-column flex-sm-row flex-md-row flex-lg-row"
          >
            <div
              v-for="links in quicklinks"
              :key="links.id"
              class="quicklinks pr-2 pb-2"
            >
              <v-btn
                densed
                color="dark"
                height="50"
                class="hover-orange"
                elevation="5"
                style="width: 100%"
                @click.stop="$router.push('/' + links.url).catch(() => {})"
                ><v-icon class="white--text mr-2">
                  {{ links.icon }}
                </v-icon>
                <span class="white--text text-h6">{{ links.text }}</span>
              </v-btn>
            </div>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="pt-2 pb-7">
          <v-row class="px-0 py-0">
            <v-col
              cols="12"
              sm="6"
              md="6"
              lg="3"
              v-for="box in boxes"
              :key="box.id"
              class="px-0 py-0 pr-2 pr-md-2 pr-lg-2 pl-2 pl-sm-0 pl-md-0 pl-lg-0 pb-2"
              style="overflow: hidden"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  elevation="4"
                  :aspect-ratio="1"
                  :src="box.src"
                  v-if="box.type == 'img'"
                  @click.stop="loginFirst"
                  style="cursor: pointer"
                  :class="{ 'hover-zoom': hover }"
                >
                  <v-skeleton-loader
                    absolute
                    type="image"
                    v-if="isLoading"
                    class="fill-height"
                  >
                  </v-skeleton-loader>
                </v-img>
              </v-hover>
              <v-hover v-slot="{ hover }">
                <v-img
                  v-if="box.type == 'button'"
                  elevation="4"
                  :aspect-ratio="1"
                  :src="box.src"
                  style="cursor: pointer"
                  :class="{ 'on-hover': hover }"
                >
                  <v-skeleton-loader
                    absolute
                    type="image"
                    v-if="isLoading"
                    class="fill-height"
                  >
                  </v-skeleton-loader>
                  <v-overlay absolute class="align-center justify-center">
                    <p class="text-h6 text-center">{{box.name}}</p>
                    <v-btn
                      color="orange"
                      class="hover-transparent"
                      @click.stop="loginFirst"
                      >Mulai Bermain</v-btn
                    >
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-col
              cols="12"
              md="6"
              lg="6"
              class="pl-2 pr-2 pl-sm-0 pl-md-0 pr-md-2 pl-lg-0 pr-lg-2 pt-0"
            >
              <v-img
                elevation="4"
                src="https://dummyimage.com/1250x568/999999/fff.png"
                lazy-src="https://dummyimage.com/1250x568/999999/fff.png"
                style="cursor: pointer"
                @click.stop="$router.push('/slot').catch(() => {})"
              >
                <v-skeleton-loader
                  absolute
                  type="image"
                  v-if="isLoading"
                  class="fill-height"
                >
                </v-skeleton-loader>
              </v-img>
            </v-col>
            <v-col
              cols="12"
              md="6"
              lg="6"
              class="pl-2 pr-2 pl-sm-0 pl-md-0 pr-md-2 pl-lg-0 pr-lg-2 pt-0"
            >
              <v-carousel
                cycle
                show-arrows
                hide-delimiter-background
                height="auto"
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  :src="slide.src"
                  @click.stop="$router.push('/' + slide.url).catch(() => {})"
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
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { getStore } from '../../utilities';
export default {
  name: "ProductGalleryComp",
  data() {
    return {
      quicklinks: [
        { id: "1", icon: "mdi mdi-star", text: "Slot", url: "slot" },
        { id: "2", icon: "mdi mdi-star", text: "Casino", url: "casino" },
        { id: "3", icon: "mdi mdi-star", text: "Games", url: "games" },
        { id: "4", icon: "mdi mdi-star", text: "Sports", url: "sports" },
        { id: "5", icon: "mdi mdi-star", text: "Promo", url: "promo" },
      ],
      boxes: [
        {
          id: "1",
          type: "img",
          name: "Slots",
          url: "#",
          src: `${process.env.VUE_APP_BE_URL}images/banner1.png`,
        },
        {
          id: "2",
          type: "img",
          name: "Slots",
          url: "#",
          src:  `${process.env.VUE_APP_BE_URL}images/banner2.png`,
        },
        {
          id: "3",
          type: "img",
          name: "Slots",
          url: "#",
          src:  `${process.env.VUE_APP_BE_URL}images/banner3.png`,
        },
        {
          id: "4",
          type: "button",
          name: "Slots",
          url: "#",
          src:  `${process.env.VUE_APP_BE_URL}images/banner2.png`,
        },
      ],
      slides: [
        {
          id: "1",
          url: "#",
          src: `${process.env.VUE_APP_BE_URL}images/banner2.png`,
        },
        {
          id: "2",
          url: "#",
          src: `${process.env.VUE_APP_BE_URL}images/banner3.png`,
        },
        {
          id: "3",
          url: "#",
          src: `${process.env.VUE_APP_BE_URL}images/banner1.png`,
        },
        {
          id: "4",
          url: "#",
          src: `${process.env.VUE_APP_BE_URL}images/banner1.png`,
        },
      ],
      overlay: false,
      isLoading: true,
    };
  },
  methods: {
    loginFirst() {
      if (getStore("token")) {
        this.$router.push({
          path: `/slot`
        })
      } else {
        // $swal function calls SweetAlert into the application with the specified configuration.
        Swal.fire(
          "Silahkan Login!",
          "Silahkan Login sebelum bermain.",
          "warning"
        );
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
