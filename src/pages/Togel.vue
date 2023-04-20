<template>
  <div style="margin-top:103px">
    <BannerComp :image="banner"/>
    <RegionComp :rows="region"/>
    <TabsComp :brands="brands" :contents="contents"/>
    <BottomSliderComp :slides="slot" />
  </div>
</template>
<script>
import BannerComp from "@/components/Banner.vue";
import RegionComp from "@/components/Togel/Region.vue";
import TabsComp from "@/components/Tabs.vue";
import BottomSliderComp from "@/components/BottomSlider.vue";
export default {
  name: "TogelView",
  components: {
    BannerComp,
    TabsComp,
    BottomSliderComp,
    RegionComp,
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
    banner:'https://dummyimage.com/3198x1200/eb9150/ffffff.png',
    region: [
      {id:'1',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'2',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'3',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'4',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'5',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'6',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'7',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'8',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'9',brand:'test',amount:'2000', date:'Rabu,19/04/2023'},
      {id:'10',brand:'test',amount:'2000', date:'Rabu,19/04/2023'}
    ],
    brands:[
      {id:'1',name:'brand_sdsb',src:'https://static.nukeasset.com/assets/images/vendor/sdsb.png',url:'#',type:'hot'}
    ],
    contents:[
      {id:'1',name:'brand_sdsb',src:'https://static.nukeasset.com/assets/images/vendor/sdsb.png',url:'#',type:'hot'}
    ]
  }),
  methods: {},
  mounted() {},
};
</script>
