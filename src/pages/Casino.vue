<template>
  <div style="margin-top: 103px">
    <BannerComp :image="banner" />
    <CasinoGalleryComp :casino="casino" class="pt-12"/>
    <BottomSliderComp :slides="slot" />
  </div>
</template>
  <script>
import BannerComp from "@/components/Banner.vue";
import CasinoGalleryComp from "@/components/Casino/CasinoGallery.vue";
import BottomSliderComp from "@/components/BottomSlider.vue";
export default {
  name: "CasinoView",
  components: {
    BannerComp,
    CasinoGalleryComp,
    BottomSliderComp,
  },
  data: () => ({
    slot: [
      {
        id: 1,
        name: "advant_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/advant.png",
        opt: ["Slot"],
      },
      {
        id: 2,
        name: "pragmatic_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/pragmatic.png",
        opt: [
          "Slot",
          "Buy Free Spin Games",
          "Megaways Game",
          "Classic Slots",
          "All",
        ],
      },
      {
        id: 3,
        name: "habanero_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/habanero.png",
        opt: ["Slot", "Buy Free Spin"],
      },
      {
        id: 4,
        name: "red_tiger_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/red_tiger.png",
        opt: [
          "Slot",
          "Megaways Game",
          "InfiniReels",
          "Power Reels",
          "Clusters",
          "All",
        ],
      },
      {
        id: 5,
        name: "mg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/mg.png",
        opt: [
          "Slot",
          "Bonus Buy Feature",
          "Megaways Game",
          "Link and Win Games",
          "Fix Jackpot Games",
          "All",
        ],
      },
      {
        id: 6,
        name: "netent_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/netent.png",
        opt: [
          "Slot",
          "Bonus Buy Feature",
          "Megaways Game",
          "Link and Win Games",
          "Fix Jackpot Games",
          "All",
        ],
      },
      {
        id: 7,
        name: "pg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/pg.png",
        opt: ["Slot"],
      },
      {
        id: 8,
        name: "ag_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/ag.png",
        opt: ["Slot", "Poker", "Others", "King", "Casual", "Table", "All"],
      },
      {
        id: 9,
        name: "spade_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/spade.png",
        opt: ["Slot", "Buy Free Spin"],
      },
      {
        id: 10,
        name: "cq9_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/cq9.png",
        opt: ["Slot"],
      },
      {
        id: 11,
        name: "joker_gaming_games",
        src: "https://static.nukeasset.com/assets/images/vendor/joker_gaming.png",
        opt: [],
      },
      {
        id: 12,
        name: "ygg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/ygg.png",
        opt: ["Slot"],
      },
      {
        id: 13,
        name: "sbo_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/sbo.png",
        opt: ["Slot"],
      },
    ],
    casino: [
      {
        id: 1,
        name: "pragmatic_casino",
        src: "https://static.nukeasset.com/assets/images/casino/pragmatic.jpg",
        url:""
      },
      {
        id: 2,
        name: "evo_casino",
        src: "https://static.nukeasset.com/assets/images/casino/evo.jpg",
        url:""
      },
      {
        id: 3,
        name: "ag_casino_games",
        src: "https://static.nukeasset.com/assets/images/casino/ag_casino.jpg",
        url:""
      },
      {
        id: 4,
        name: "ionl_gaming_games",
        src: "https://static.nukeasset.com/assets/images/casino/ionl_gaming.jpg",
        url:""
      },
      {
        id: 5,
        name: "sexy_gaming_games",
        src: "https://static.nukeasset.com/assets/images/casino/sexy_gaming.jpg",
        url:""
      },
      {
        id: 6,
        name: "big_gaming_games",
        src: "https://static.nukeasset.com/assets/images/casino/big_gaming.jpg",
        url:""
      },
      {
        id: 7,
        name: "big_gaming_games",
        src: "https://static.nukeasset.com/assets/images/casino/big_gaming.jpg",
        url:""
      },
      {
        id: 8,
        name: "allbet_casino",
        src: "https://static.nukeasset.com/assets/images/casino/allbet.jpg",
        url:""
      },
      {
        id: 9,
        name: "sbo_live_casino",
        src: "https://static.nukeasset.com/assets/images/casino/sbo_live.jpg",
        url:""
      },
      {
        id: 10,
        name: "mg_casino",
        src: "https://static.nukeasset.com/assets/images/casino/mg.jpg",
        url:""
      },
    ],
    banner: "https://dummyimage.com/3198x1200/eb9150/ffffff.png",
  }),
  methods: {},
  mounted() {},
};
</script>
  