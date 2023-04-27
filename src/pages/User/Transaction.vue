<template>
  <div>
    <ReportComp />
    <BottomSliderComp :slides="slot" />
  </div>
</template>
  
<script>
import ReportComp from "@/components/Transactions/Report.vue";
import BottomSliderComp from "@/components/BottomSlider.vue";
export default {
  name: "TransactionView",
  components: {
    ReportComp,
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
    profile: [
      {
        id: "1",
        name: "Your name",
        saldo: "",
        avatar: "active",
        src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
      },
    ],
    transcategories: [
      { id: "1", name: "Deposit", url: "/deposit" },
      { id: "2", name: "Withdraw", url: "/withdraw" },
      { id: "3", name: "Riwayat", url: "/history" },
    ],
  }),
};
</script>
  