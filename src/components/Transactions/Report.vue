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
          <div class="filter-list"></div>
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
              <p class="text-p mb-0 text-uppercase text-bold grey--text">
                {{ tabtitle.name }}
              </p>
            </v-tab>

            <template v-if="tab === 0">
              <div class="tab-filter">
                <p class="text-p black--text mb-0 pb-0">Permainan:</p>
                <v-select
                  v-model="selbet"
                  :items="selectbet"
                  append-icon="mdi-chevron-down"
                  label="Permainan"
                  item-text="option"
                  solo
                  absolute
                  attach=".filter-list"
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
                <p class="text-p black--text mb-0 pb-0">Jenis Transaksi:</p>
                <v-select
                  v-model="seltrans"
                  :items="selecttrans"
                  append-icon="mdi-chevron-down"
                  @change="selectTrans"
                  label="Permainan"
                  item-text="option"
                  solo
                  absolute
                  attach=".filter-list"
                  top
                  right
                  light
                  flat
                >
                </v-select>
              </div>
            </template>

            <v-tabs-items
              v-model="tab"
              style="background-color: transparent; min-height: 400px"
            >
              <v-tab-item
                v-for="tabtitle in tabtitles"
                :key="tabtitle.id"
                class="overflow-auto"
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
                  <v-slide-x-transition
                    v-if="!isLoading"
                    hide-on-leave
                    mode="out-in"
                    appear
                  >
                    <HistoryBetComp absolute :page.sync="page.historybet" :historybet="historybet" :pageHandler="betPageHandler" :length="length.historybet" />
                  </v-slide-x-transition>
                </template>
                <template v-if="tab === 1">
                  <div
                    v-if="isLoading"
                    class="d-flex flex-row justify-center align-center pb-8 loader"
                  >
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                  <v-slide-x-transition
                    v-if="!isLoading"
                    hide-on-leave
                    mode="out-in"
                    appear
                  >
                    <HistoryTransactionComp
                      absolute
                      :page.sync="page.historytrans"
                      :pageHandler="transactionPageHandler"
                      :historytrans="historytrans"
                      :length="length.historytrans"
                    />
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
import method from '../../utilities/axios-setup';
export default {
  name: "ReportComp",
  components: {
    HistoryBetComp,
    HistoryTransactionComp,
  },
  data() {
    return {
      isLoading: true,
      tab: null,
      tabtitles: [
        { id: "1", name: "Sejarah Taruhan", tag: "history_bet" },
        { id: "2", name: "Sejarah Transaksi", tag: "history_transaction" },
      ],
      page: {
        historytrans: 1,
        historybet: 1,
      },
      length: {
        historytrans: 10,
        historybet: 10,
      },
      selbet: { option: "Semua" },
      seltrans: { option: "Semua" },
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
      historytrans: [],
    };
  },
  methods: {
    async betPageHandler(page) {
      this.page.historybet = page;
      await this.getHistoryBet();
    },
    async transactionPageHandler(page) {
      this.page.historytrans = page;
      await this.getHistoryTransaction();
    },
    async getHistoryBet() {
      await method.get(`transaction?type=bet&page=${this.page.historybet}`)
      .then((res) => {
        const data = res.data.data;
        const pagination = data.pagination;
        this.length.historybet = pagination.last_page;
        let arrData = [];
        data.data.forEach((row) => {
          let status = '';
          if (row.status === 0) {
            status = 'lose'
          } else if (row.status === 1) {
            status = 'win'
          } else {
            status = 'draw'
          }

          let item = {
            id: row.id,
            date: row.created_at,
            games: row.game_type,
            category: "slot",
            bet: "Rp ." + row.bet,
            result: row.status === 0 ? "-Rp. " + row.win : "Rp. " + row.win,
            amount: "Rp. " + row.result,
            status: status,
            note: "-",
          }
          arrData.push(item);
        });
        this.historybet = arrData;
      })
    },
    async getHistoryTransaction (transactionType) {
      await method.get(`transaction?type=transaction&transaction_type=${transactionType.toLowerCase()}&page=${this.page.historytrans}`)
      .then((res) => {
        const data = res.data.data;
        const pagination = data.pagination;
        this.length.historytrans = pagination.last_page;
        let arrData = [];
        data.data.forEach((row) => {
          let status = '';
          if (row.status === 0) {
            status = 'pending'
          } else if (row.status === 1) {
            status = 'success'
          } else {
            status = 'rejected'
          }
          let remarks
          if (row.remarks !== null) {
            remarks = JSON.parse(row.remarks)
          } else {
            remarks = null
          }
          let item = {
            id: row.id,
            date: row.created_at,
            account: row.account_name + '/' + row.account_number,
            category: row.type,
            amount: "Rp. " + row.amount,
            status: status,
            note: remarks !== null ? remarks.note : null,
          }
          arrData.push(item);
        });
        this.historytrans = arrData;
      })
    },
    async selectTrans(event) {
      await this.getHistoryTransaction(event)
    },
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
    this.getHistoryBet()
    this.getHistoryTransaction('')
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
