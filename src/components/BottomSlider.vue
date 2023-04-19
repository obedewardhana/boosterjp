<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="pt-4 pb-10">
          <VueSlickCarousel v-bind="settings">
            <div v-for="(slide, idx) in slides" :key="idx || slide.name">
              <v-btn
                elevation="0"
                color="white"
                height="50"
                class="ma-2 mt-2 mb-2"
                style="cursor: unset"
              >
                <v-img
                  width="140"
                  height="45"
                  contain
                  :src="slide.src"
                  :lazy-src="slide.src"
                >
                </v-img>
              </v-btn>
            </div>
            <template #prevArrow="arrowOption">
              <div class="custom-arrow">
                <v-btn text elevation="0" class="prev no-shadow">
                  <v-icon class="white--text text-h3"
                    >mdi mdi-chevron-left</v-icon
                  ><span class="hide"
                    >{{ arrowOption.currentSlide }}/{{
                      arrowOption.slideCount
                    }}</span
                  >
                </v-btn>
              </div>
            </template>
            <template #nextArrow="arrowOption">
              <div class="custom-arrow">
                <v-btn text elevation="0" class="next no-shadow">
                  <v-icon class="white--text text-h3"
                    >mdi mdi-chevron-right</v-icon
                  ><span class="hide">
                    {{ arrowOption.currentSlide }}/{{
                      arrowOption.slideCount
                    }}</span
                  >
                </v-btn>
              </div>
            </template>
          </VueSlickCarousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "BottomSliderComp",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        centerPadding: "10px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1367,
            settings: {
              dots: false,
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              dots: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              dots: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
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
