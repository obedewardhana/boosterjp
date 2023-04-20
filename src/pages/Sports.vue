<template>
  <div style="margin-top: 103px">
    <BannerComp :image="banner" />
    <TabsComp :brands="sports" :contents="contents" class="pt-10" />
    <BottomSliderComp :slides="slot" />
  </div>
</template>
  <script>
import BannerComp from "@/components/Banner.vue";
import TabsComp from "@/components/Tabs.vue";
import BottomSliderComp from "@/components/BottomSlider.vue";
export default {
  name: "SportsView",
  components: {
    BannerComp,
    TabsComp,
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
    banner: "https://dummyimage.com/3198x1200/eb9150/ffffff.png",
    sports: [
      {
        id: 1,
        name: "ibc_sports_sports",
        brand: "ibc_sports_sports",
        src: "https://static.nukeasset.com/assets/images/vendor/ibc_sports.png",
        type:"",
        url:""
      },
      {
        id: 3,
        name: "ibc_esports_esports",
        brand: "ibc_esports_esports",
        src: "https://static.nukeasset.com/assets/images/vendor/ibc_esports.png",
        type:"hot",
        url:""
      },
      {
        id: 4,
        name: "sbo_sports_book",
        brand: "sbo_sports_book",
        src: "https://static.nukeasset.com/assets/images/vendor/sbo_sports.png",
        type:"new",
        url:""
      },
      {
        id: 5,
        name: "sbo_virtual_sports",
        brand: "sbo_virtual_sports",
        src: "https://static.nukeasset.com/assets/images/vendor/sbo_virtual.png",
        type:"",
        url:""
      },
    ],
    contents: [
      {
        id: 1,
        name: "ibc_sports_sports",
        brand: "ibc_sports_sports",
        src: "https://static.nukeasset.com/assets/images/vendor/ibc_sports.png",
        type:"",
        url:""
      },
      {
        id: 3,
        name: "ibc_esports_esports",
        brand: "ibc_esports_esports",
        src: "https://static.nukeasset.com/assets/images/vendor/ibc_esports.png",
        type:"hot",
        url:""
      },
      {
        id: 4,
        name: "sbo_sports_book",
        brand: "sbo_sports_book",
        src: "https://static.nukeasset.com/assets/images/vendor/sbo_sports.png",
        type:"new",
        url:""
      },
      {
        id: 5,
        name: "sbo_virtual_sports",
        brand: "sbo_virtual_sports",
        src: "https://static.nukeasset.com/assets/images/vendor/sbo_virtual.png",
        type:"",
        url:""
      },
    ],
  }),
  methods: {},
  mounted() {},
};
</script>
  