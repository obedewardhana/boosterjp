<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex mb-5 align-center justify-start">
          <v-icon large class="orange--text mr-3">mdi-currency-usd</v-icon>
          <p class="text-h5 black--text text-medium mb-0">Transaksi Anda</p>
        </div>
        <v-card elevation="0" white
          class="d-flex pl-3 pr-3 pb-3 pt-3 mb-3 flex-row justify-space-between align-center rounded-md">
          <v-tabs v-model="tab" height="50" background-color="white" center-active class="rounded tab-simple"
            :show-arrows="true">
            <v-tab :ripple="false" v-for="transcategorie in transcategories" :key="transcategorie.id" class="no-hover"
              @click.stop="loadData()">
              <p class="text-p mb-0 text-uppercase text-medium grey--text">
                {{ transcategorie.name }}
              </p>
            </v-tab>

            <v-btn size="small" elevation="0" absolute right top class="no-shadow"
              style="background-color: transparent; right: -10px;"
              @click.stop="$router.push('/transaction').catch(() => { })"><v-icon
                class="orange--text big-icon text-p">mdi-note-text-outline</v-icon></v-btn>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="transcategorie in transcategories" :key="transcategorie.id" class="pt-5 overflow-auto"
                :transition="false" style="min-height: 150px; height: auto">
                <template v-if="tab === 0">
                  <div v-if="isLoading" class="d-flex flex-row justify-center align-center pb-8 loader">
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                  <v-slide-x-transition v-if="!isLoading" mode="out-in" appear>
                    <DepositComp absolute :deposit="deposit" :page="page.deposit" :length="length.deposit"
                      :pageHandler="pageDepositHandler" />
                  </v-slide-x-transition>
                </template>

                <template v-if="tab === 1">
                  <div v-if="isLoading" class="d-flex flex-row justify-center align-center pb-8 loader">
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                  <v-slide-x-transition v-if="!isLoading" mode="out-in" appear>
                    <WithdrawComp absolute :withdraw="withdraw" :page="page.withdraw" :length="length.withdraw"
                      :pageHandler="pageWithdrawHandler" />
                  </v-slide-x-transition>
                </template>

                <template v-if="tab === 2">
                  <div v-if="isLoading" class="d-flex flex-row justify-center align-center pb-8 loader">
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                  <v-slide-x-transition v-if="!isLoading" mode="out-in" appear>
                    <HistoryComp absolute :history="history" :page="page.history" :length="length.history"
                      :pageHandler="pageHistoryHandler" />
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
import DepositComp from "@/components/Transactions/Deposit.vue";
import WithdrawComp from "@/components/Transactions/Withdraw.vue";
import HistoryComp from "@/components/Transactions/History.vue";
import method from '../../utilities/axios-setup';
import { rupiah } from '../../utilities';
export default {
  name: "UserTransactionComp",
  components: {
    DepositComp,
    HistoryComp,
    WithdrawComp,
  },
  data() {
    return {
      isLoading: true,
      tab: null,
      page: {
        deposit: 1,
        withdraw: 1,
        history: 1,
      },
      length: {
        deposit: 15,
        withdraw: 15,
        history: 15,
      },
      deposit: [],
      withdraw: [],
      history: [],
    };
  },
  props: {
    transcategories: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    loadData() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 400);
    },
    async getHistory() {
      await method.get(`transaction?type=bet&page=${this.page.history}`)
        .then((res) => {
          const data = res.data.data;
          const pagination = data.pagination;
          this.length.history = pagination.last_page;
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
          this.history = arrData;
        })
    },
    async pageHistoryHandler(page) {
      this.page.history = page;
      await this.getHistory()
    },
    async getWithdrawHistory() {
      await method.get(`transaction?type=transaction&transaction_type=withdraw&page=${this.page.withdraw}`)
        .then((res) => {
          const data = res.data.data;
          const pagination = data.pagination;
          this.length.withdraw = pagination.last_page;
          console.log(pagination.last_page);
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
              sender: row.member_bank_name + ' - ' + row.account_name + '/' + row.account_number,
              amount: rupiah(row.amount.toString()),
              status: status,
            }
            arrData.push(item);
          });
          this.withdraw = arrData;
        })
    },
    async pageWithdrawHandler(page) {
      this.page.withdraw = page;
      await this.getWithdrawHistory();
    },
    async pageDepositHandler(page) {
      this.page.deposit = page;
      await this.getDepositHistory();
    },
    async getDepositHistory() {
      await method.get(`transaction?type=transaction&transaction_type=deposit&page=${this.page.deposit}`)
        .then((res) => {
          const data = res.data.data;
          const pagination = data.pagination;
          this.length.deposit = pagination.last_page;
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
              sender: row.member_bank_name + ' - ' + row.account_name + '/' + row.account_number,
              receiver: row.admin_bank_name + ' - ' + row.admin_account_name + '/' + row.admin_bank_account_number,
              amount: rupiah(row.amount.toString()),
              status: status,
              note: remarks !== null ? remarks.note : null,
            }
            arrData.push(item);
          });
          this.deposit = arrData;
        })
    },
    goTo(id) {
      this.$router.push({
        path: `/${id}`,
      });
    },
  },
  mounted() {
    this.getHistory()
    this.getWithdrawHistory()
    this.getDepositHistory()
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
