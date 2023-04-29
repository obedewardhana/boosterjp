<template>
  <v-app :class="{ 'is-top': !moveTop }">
    <LoadingComp v-if="isLoading"></LoadingComp>
    <NavigationComp
      :color="color"
      :flat="flat"
      :class="{ 'is-hidden': !showHeader }"
    />
    <MarqueeNavComp
      :speed="speed"
      :content="content"
      color="dark"
      :class="{ 'is-top': !moveTop }"
    ></MarqueeNavComp>
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <FooterComp color="black"></FooterComp>

    <LiveChatWidget license="15361152" visibility="minimized" />

    <v-btn width="40" height="40" fixed bottom left class="rounded-circle no-shadow no-padding" style="z-index:8;" color="green" @click="outside(whatsapp)">
      <v-icon class="white--text">mdi-whatsapp</v-icon>
    </v-btn>

    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        left
        small
        color="dark"
        @click="toTop"
        style="left:65px;z-index:8;"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>

  </v-app>
</template>

<style scoped>
#app {
  background: #dedede;
}
.v-main {
  margin-top: 103px;
}
.no-marquee .v-main {
  margin-top: 65px;
}
</style>

<script>
import "@/assets/scss/style.scss";
import "@/assets/scss/responsive.scss";
import { LiveChatWidget } from "@livechat/widget-vue/v2";
import Vue from "vue";
import NavigationComp from "./components/Navigation";
import MarqueeNavComp from "./components/MarqueeNav";
import FooterComp from "./components/Footer";
import LoadingComp from "@/components/Loading";
export default Vue.extend({
  name: "App",
  components: {
    NavigationComp,
    LoadingComp,
    MarqueeNavComp,
    FooterComp,
    LiveChatWidget,
  },

  data: () => ({
    fab: null,
    color: "dark",
    whatsapp:"https://wa.me/6281355538777",
    flat: null,
    isLoading: true,
    showHeader: true,
    moveTop: true,
    lastScrollPosition: 0,
    speed: 70,
    content:
      "Selamat Datang di BuntungHoki88 Situs Judi Online Terpercaya Menang Berapapun PASTI di BAYAR. Info Penting : Pastikan Check Nomor Tujuan Deposit yang Sesuai. UNTUK INFO LEBIH LANJUT BISA HUBUNGI KAMI DI LIVE CHAT / WHATS APP +855 - 97 856 - 7577",
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
      this.moveTop = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    goTo(id) {
      this.$router.push({
        path: `/${id}`,
      });
    },
    outside(id) {
      window.open(id, "_blank");
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
