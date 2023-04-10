<template>
  <v-app>
    <LoadingComp v-if="isLoading"></LoadingComp>
    <NavigationComp
      :color="color"
      :flat="flat"
      :class="{ 'is-hidden': !showHeader }"
    />
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<script>
import "@/assets/scss/style.scss";
import "@/assets/scss/responsive.scss";
import Vue from "vue";
import NavigationComp from "./components/Navigation";
import LoadingComp from "@/components/Loading";
export default Vue.extend({
  name: "App",
  components: {
    NavigationComp,
    LoadingComp,
  },

  data: () => ({
    fab: null,
    color: "dark",
    flat: null,
    isLoading: true,
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40,
  }),

  created() {
    this.flat = true;
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll(e) {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return;
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
});
</script>
