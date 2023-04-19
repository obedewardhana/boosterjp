<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="pt-4 pb-10">
          <v-slide-group show-arrows>
            <v-btn
              elevation="0"
              color="white"
              height="50"
              class="ma-2 mt-2 mb-2"
              v-for="(slide, idx) in slides"
              :key="idx || slide.name"
              style="cursor:unset"
            >
              <v-img
                width="150"
                height="50"
                contain
                :src="slide.src"
                :lazy-src="slide.src"
              >
              </v-img>
            </v-btn>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "BottomSliderComp",
  data() {
    return {};
  },
  props: {
    slides: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
