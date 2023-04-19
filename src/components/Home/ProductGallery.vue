<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="pt-7 pb-4">
          <v-row>
            <div
              v-for="links in quicklinks"
              :key="links.id"
              style="width: calc(100% / 5)"
              class="pr-2 pb-2"
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
              cols="3"
              v-for="box in boxes"
              :key="box.id"
              class="px-0 py-0 pr-2"
              style="overflow: hidden"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  elevation="4"
                  :aspect-ratio="1"
                  :src="box.src"
                  :lazy-src="box.src"
                  v-if="box.type == 'img'"
                  @click.stop="$router.push('/' + box.url).catch(() => {})"
                  style="cursor: pointer"
                  :class="{ 'hover-zoom': hover }"
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
                </v-img>
              </v-hover>
              <v-hover v-slot="{ hova }">
                <v-img
                  v-if="box.type == 'button'"
                  elevation="4"
                  :aspect-ratio="1"
                  :src="box.src"
                  :lazy-src="box.src"
                  style="cursor: pointer"
                  :class="{ 'on-hover': hova }"
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
                    <p class="text-h6 text-center">Slots</p>
                    <v-btn
                      color="orange"
                      class="hover-transparent"
                      @click.stop="$router.push('/' + box.url).catch(() => {})"
                      >Mulai Bermain</v-btn
                    >
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-col cols="6" class="px-0 pt-2 pr-2">
              <v-img
                elevation="4"
                src="https://dummyimage.com/1250x568/999999/fff.png"
                lazy-src="https://dummyimage.com/1250x568/999999/fff.png"
                style="cursor: pointer"
                @click.stop="$router.push('/slot').catch(() => {})"
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
              </v-img>
            </v-col>
            <v-col cols="6" class="px-0 pt-2 pr-2">
              <v-carousel cycle  show-arrows hide-delimiter-background height="auto">
                <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" :lazy-src="slide.src" @click.stop="$router.push('/' + slide.url).catch(() => {})">
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
          url: "#",
          src: "https://dummyimage.com/900x900/9c9c9c/fff.png",
        },
        {
          id: "2",
          type: "img",
          url: "#",
          src: "https://dummyimage.com/900x900/9c9c9c/fff.png",
        },
        {
          id: "3",
          type: "img",
          url: "#",
          src: "https://dummyimage.com/900x900/9c9c9c/fff.png",
        },
        {
          id: "4",
          type: "button",
          url: "#",
          src: "https://dummyimage.com/900x900/9c9c9c/fff.png",
        },
      ],
      slides: [
        {
          id: "1",
          url: "#",
          src: "https://dummyimage.com/1250x568/999999/fff.png",
        },
        {
          id: "2",
          url: "#",
          src: "https://dummyimage.com/1250x568/999999/fff.png",
        },
        {
          id: "3",
          url: "#",
          src: "https://dummyimage.com/1250x568/999999/fff.png",
        },
        {
          id: "4",
          url: "#",
          src: "https://dummyimage.com/1250x568/999999/fff.png",
        },
      ],
    };
  },
};
</script>
