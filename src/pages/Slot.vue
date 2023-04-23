<template>
  <div style="margin-top: 103px">
    <BannerComp :image="banner" />
    <TabsComp :brands="slot" :contents="contents" class="pt-12" />
    <BottomSliderComp :slides="slot" />
  </div>
</template>
  <script>
import BannerComp from "@/components/Banner.vue";
import TabsComp from "@/components/Tabs.vue";
import BottomSliderComp from "@/components/BottomSlider.vue";
export default {
  name: "SlotView",
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
        brand: "advant_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/advant.png",
        opt: ["Slot"],
        type: "hot",
        url:""
      },
      {
        id: 2,
        name: "pragmatic_slot",
        brand: "pragmatic_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/pragmatic.png",
        opt: [
          "Slot",
          "Buy Free Spin Games",
          "Megaways Game",
          "Classic Slots",
          "All",
        ],
        type: "hot",
        url:""
      },
      {
        id: 3,
        name: "habanero_slot",
        brand: "habanero_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/habanero.png",
        opt: ["Slot", "Buy Free Spin"],
        type: "new",
        url:""
      },
      {
        id: 4,
        name: "red_tiger_slot",
        brand: "red_tiger_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/red_tiger.png",
        opt: [
          "Slot",
          "Megaways Game",
          "InfiniReels",
          "Power Reels",
          "Clusters",
          "All",
        ],
        type: "new",
        url:""
      },
      {
        id: 5,
        name: "mg_slot",
        brand: "mg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/mg.png",
        opt: [
          "Slot",
          "Bonus Buy Feature",
          "Megaways Game",
          "Link and Win Games",
          "Fix Jackpot Games",
          "All",
        ],
        type: "hot",
        url:""
      },
      {
        id: 6,
        name: "netent_slot",
        brand: "netent_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/netent.png",
        opt: [
          "Slot",
          "Bonus Buy Feature",
          "Megaways Game",
          "Link and Win Games",
          "Fix Jackpot Games",
          "All",
        ],
        type: "hot",
        url:""
      },
      {
        id: 7,
        name: "pg_slot",
        brand: "pg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/pg.png",
        opt: ["Slot"],
        type: "new",
        url:""
      },
      {
        id: 8,
        name: "ag_slot",
        brand: "ag_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/ag.png",
        opt: ["Slot", "Poker", "Others", "King", "Casual", "Table", "All"],
        type: "hot",
        url:""
      },
      {
        id: 9,
        name: "spade_slot",
        brand: "spade_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/spade.png",
        opt: ["Slot", "Buy Free Spin"],
        type: "hot",
        url:""
      },
      {
        id: 10,
        name: "cq9_slot",
        brand: "cq9_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/cq9.png",
        opt: ["Slot"],
        type: "hot",
        url:""
      },
      {
        id: 11,
        name: "joker_gaming_games",
        brand: "joker_gaming_games",
        src: "https://static.nukeasset.com/assets/images/vendor/joker_gaming.png",
        opt: [],
        type: "hot",
        url:""
      },
      {
        id: 12,
        name: "ygg_slot",
        brand: "ygg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/ygg.png",
        opt: ["Slot"],
        type: "new",
        url:""
      },
      {
        id: 13,
        name: "sbo_slot",
        brand: "sbo_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/sbo.png",
        opt: ["Slot"],
        type: "new",
        url:""
      },
    ],
    contents: [
      {
        id: 1,
        name: "advant_slot",
        brand: "advant_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/advant.png",
        opt: ["Slot"],
        type: "hot",
        url:""
      },
      {
        id: 2,
        name: "pragmatic_slot",
        brand: "pragmatic_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/pragmatic.png",
        opt: [
          "Slot",
          "Buy Free Spin Games",
          "Megaways Game",
          "Classic Slots",
          "All",
        ],
        type: "hot",
        url:""
      },
      {
        id: 3,
        name: "habanero_slot",
        brand: "habanero_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/habanero.png",
        opt: ["Slot", "Buy Free Spin"],
        type: "new",
        url:""
      },
      {
        id: 4,
        name: "red_tiger_slot",
        brand: "red_tiger_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/red_tiger.png",
        opt: [
          "Slot",
          "Megaways Game",
          "InfiniReels",
          "Power Reels",
          "Clusters",
          "All",
        ],
        type: "new",
        url:""
      },
      {
        id: 5,
        name: "mg_slot",
        brand: "mg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/mg.png",
        opt: [
          "Slot",
          "Bonus Buy Feature",
          "Megaways Game",
          "Link and Win Games",
          "Fix Jackpot Games",
          "All",
        ],
        type: "hot",
        url:""
      },
      {
        id: 6,
        name: "netent_slot",
        brand: "netent_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/netent.png",
        opt: [
          "Slot",
          "Bonus Buy Feature",
          "Megaways Game",
          "Link and Win Games",
          "Fix Jackpot Games",
          "All",
        ],
        type: "hot",
        url:""
      },
      {
        id: 7,
        name: "pg_slot",
        brand: "pg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/pg.png",
        opt: ["Slot"],
        type: "new",
        url:""
      },
      {
        id: 8,
        name: "ag_slot",
        brand: "ag_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/ag.png",
        opt: ["Slot", "Poker", "Others", "King", "Casual", "Table", "All"],
        type: "hot",
        url:""
      },
      {
        id: 9,
        name: "spade_slot",
        brand: "spade_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/spade.png",
        opt: ["Slot", "Buy Free Spin"],
        type: "hot",
        url:""
      },
      {
        id: 10,
        name: "cq9_slot",
        brand: "cq9_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/cq9.png",
        opt: ["Slot"],
        type: "hot",
        url:""
      },
      {
        id: 11,
        name: "joker_gaming_games",
        brand: "joker_gaming_games",
        src: "https://static.nukeasset.com/assets/images/vendor/joker_gaming.png",
        opt: [],
        type: "hot",
        url:""
      },
      {
        id: 12,
        name: "ygg_slot",
        brand: "ygg_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/ygg.png",
        opt: ["Slot"],
        type: "new",
        url:""
      },
      {
        id: 13,
        name: "sbo_slot",
        brand: "sbo_slot",
        src: "https://static.nukeasset.com/assets/images/vendor/sbo.png",
        opt: ["Slot"],
        type: "new",
        url:""
      },
    ],
    banner: "https://dummyimage.com/3198x1200/eb9150/ffffff.png",
  }),
  methods: {},
  mounted() {},
};
</script>
  