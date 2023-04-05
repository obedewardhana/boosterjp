<template>
  <v-app>
    <LoadingComp v-if="isLoading"></LoadingComp>
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-scale-transition>
      <v-btn fab v-show="fab" v-scroll="onScroll" dark fixed bottom right color="secondary" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<script>
import '@/assets/scss/style.scss';
import '@/assets/scss/responsive.scss';
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {
    NavigationComp
  },


  data: () => ({
    fab: null,
    color: "secondary",
    flat: null,
    isLoading: true,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 120) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    }
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
});
</script>
