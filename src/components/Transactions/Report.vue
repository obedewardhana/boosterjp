<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pt-6">
        <v-card
          class="pl-5 pr-5 pt-4 pb-4 text-p text-bold text-uppercase hover-transparent"
          dark
          >Laporan Transaksi</v-card
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          elevation="0"
          class="d-flex pl-3 pr-3 pb-3 pt-3 mb-3 flex-row justify-space-between align-center rounded-md no-bg"
        >
          <v-tabs
            v-model="tab"
            height="50"
            center-active
            class="rounded tab-simple no-bg"
            :show-arrows="true"
          >
            <v-tab
              :ripple="false"
              v-for="tabtitle in tabtitles"
              :key="tabtitle.id"
              class="no-hover no-bg pb-5"
              @click.stop="loadData()"
            >
              <p class="text-p mb-0 text-uppercase text-medium grey--text">
                {{ tabtitle.name }}
              </p>
            </v-tab>

            <template v-if="tab === 0">
              <div class="tab-filter">
                <p class="text-p mb-0 pb-0">Permainan:</p>
                <v-select
                  v-model="selbet"
                  :items="selectbet"
                  label="Permainan"
                  item-text="option"
                  solo
                  absolute
                  top
                  right
                  light
                  flat
                >
                </v-select>
              </div>
            </template>

            <template v-else-if="tab === 1">
              <div class="tab-filter">
                <p class="text-p mb-0 pb-0">Jenis Transaksi:</p>
                <v-select
                  v-model="seltrans"
                  :items="selecttrans"
                  label="Permainan"
                  item-text="option"
                  solo
                  absolute
                  top
                  right
                  light
                  flat
                >
                </v-select>
              </div>
            </template>
            

            <v-tabs-items v-model="tab" style="background-color: transparent;min-height:400px">
              <v-tab-item
                v-for="tabtitle in tabtitles"
                :key="tabtitle.id"
                class="pt-5 overflow-auto"
                :transition="false"
                style="min-height: 150px; height: auto"
              >
                <template v-if="tab === 0">
                  <div
                    v-if="isLoading"
                    class="d-flex flex-row justify-center align-center pb-8 loader"
                  >
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                  <v-slide-x-transition v-if="!isLoading" hide-on-leave mode="out-in" appear>
                    <HistoryBetComp absolute :historybet="historybet"/>
                  </v-slide-x-transition>
                </template>
                <template v-if="tab === 1">
                  <div
                    v-if="isLoading"
                    class="d-flex flex-row justify-center align-center pb-8 loader"
                  >
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                  <v-slide-x-transition v-if="!isLoading" hide-on-leave mode="out-in" appear>
                    <HistoryTransactionComp absolute :historytrans="historytrans"/>
                  </v-slide-x-transition>
                </template>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
          <v-card-title class="px-0 py-0"> </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import HistoryBetComp from "@/components/Transactions/HistoryBet.vue";
import HistoryTransactionComp from "@/components/Transactions/HistoryTransaction.vue";
export default {
  name: "ReportComp",
  components: {
    HistoryBetComp,
    HistoryTransactionComp
  },
  data() {
    return {
      isLoading: true,
      tab: null,
      tabtitles: [
        { id: "1", name: "Sejarah Taruhan", tag: "history_bet" },
        { id: "2", name: "Sejarah Transaksi", tag: "history_transaction" },
      ],
      selbet: { option: "Semua" },
      seltrans: { option: "Deposit" },
      selectbet: [
        { option: "Semua" },
        { option: "Sport" },
        { option: "Casino" },
        { option: "Games" },
        { option: "Slot" },
      ],
      selecttrans: [
        { option: "Deposit" },
        { option: "Withdraw" },
        { option: "Manual Transfer in" },
        { option: "Manual Transfer out" },
      ],
      historybet: [
        {
          id: "1",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          games: "PG Soft - SLOT",
          category: "slot",
          bet: "Rp 1.200",
          result: "-Rp. 1200",
          amount: "Rp. 0",
          status: "win",
          note: "-",
        },
        {
          id: "2",
          date: "Senin,24 April 2023 Pukul 17.30 WIB",
          games: "PG Soft - SPORT",
          category: "sport",
          bet: "Rp 1.200",
          result: "-Rp. 1200",
          amount: "Rp. 0",
          status: "lose",
          note: "-",
        },
        {
          id: "3",
          date: "Senin,24 April 2023 Pukul 17.30 WIB",
          games: "PG Soft - GAMES",
          category: "slot",
          bet: "Rp 1.200",
          result: "-Rp. 1200",
          amount: "Rp. 0",
          status: "lose",
          note: "-",
        },
        {
          id: "4",
          date: "Senin,24 April 2023 Pukul 17.30 WIB",
          games: "PG Soft - CASINO",
          category: "slot",
          bet: "Rp 1.200",
          result: "-Rp. 1200",
          amount: "Rp. 0",
          status: "lose",
          note: "-",
        },
        {
          id: "5",
          date: "Senin,24 April 2023 Pukul 17.30 WIB",
          games: "PG Soft - SLOT",
          category: "slot",
          bet: "Rp 1.200",
          result: "-Rp. 1200",
          amount: "Rp. 0",
          status: "win",
          note: "-",
        },
        {
          id: "6",
          date: "Senin,24 April 2023 Pukul 17.30 WIB",
          games: "PG Soft - SLOT",
          category: "slot",
          bet: "Rp 1.200",
          result: "-Rp. 1200",
          amount: "Rp. 0",
          status: "win",
          note: "-",
        },
      ],
      historytrans: [
        {
          id: "1",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          account: "Muhammad Rizky Firdaus / 1270011730833",
          category: "deposit",
          amount: "Rp. 0",
          status: "success",
          note: "-",
        },
        {
          id: "2",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          account: "Muhammad Rizky Firdaus / 1270011730833",
          category: "deposit",
          amount: "Rp. 0",
          status: "success",
          note: "-",
        },
        {
          id: "3",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          account: "Muhammad Rizky Firdaus / 1270011730833",
          category: "manual_transfer_out",
          amount: "Rp. 0",
          status: "success",
          note: "-",
        },
        {
          id: "4",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          account: "Muhammad Rizky Firdaus / 1270011730833",
          category: "manual_transfer_in",
          amount: "Rp. 0",
          status: "success",
          note: "-",
        },
        {
          id: "5",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          account: "Muhammad Rizky Firdaus / 1270011730833",
          category: "deposit",
          amount: "Rp. 0",
          status: "rejected",
          note: "-",
        },
        {
          id: "6",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          account: "Muhammad Rizky Firdaus / 1270011730833",
          category: "withdraw",
          amount: "Rp. 0",
          status: "rejected",
          note: "-",
        },
      ],
    };
  },
  methods: {
    loadData() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 400);
    },
    goTo(id) {
      this.$router.push({
        path: `/${id}`,
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
