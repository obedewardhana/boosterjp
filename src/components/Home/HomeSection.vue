<template>
  <section id="hero">
    <v-parallax src="" class="fill-height" height="750" style="margin-bottom:-150px">
      <v-overlay value="true" color="primary" absolute>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="12" xl="12">
            <v-row align="center" justify="center">
              <v-col cols="12" md="12" xl="12">
                <h1 class="text-h5 text-md-h3 text-xl-h2 font-weight-bold text-center">
                  
                </h1>
              </v-col>
              <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "HomeSectionComp",
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    }
  }
};
</script>


