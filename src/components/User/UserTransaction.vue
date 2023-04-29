<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex mb-5 align-center justify-start">
          <v-icon large class="orange--text mr-3">mdi-currency-usd</v-icon>
          <p class="text-h5 black--text text-medium mb-0">Transaksi Anda</p>
        </div>
        <v-card
          elevation="0"
          white
          class="d-flex pl-3 pr-3 pb-3 pt-3 mb-3 flex-row justify-space-between align-center rounded-md"
        >
          <v-tabs
            v-model="tab"
            height="50"
            background-color="white"
            center-active
            class="rounded tab-simple"
            :show-arrows="true"
          >
            <v-tab
              :ripple="false"
              v-for="transcategorie in transcategories"
              :key="transcategorie.id"
              class="no-hover"
              @click.stop="loadData()"
            >
              <p class="text-p mb-0 text-uppercase text-medium grey--text">
                {{ transcategorie.name }}
              </p>
            </v-tab>

            <v-btn
              size="small"
              elevation="0"
              absolute
              right
              top
              class="no-shadow"
              style="background-color: transparent; right: -10px;"
              @click.stop="$router.push('/transaction').catch(() => {})"
              ><v-icon  class="orange--text big-icon text-p"
                >mdi-note-text-outline</v-icon
              ></v-btn
            >

            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="transcategorie in transcategories"
                :key="transcategorie.id"
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
                  <v-slide-x-transition v-if="!isLoading" mode="out-in" appear>
                    <DepositComp absolute :deposit="deposit" />
                  </v-slide-x-transition>
                </template>

                <template v-if="tab === 1">
                  <div
                    v-if="isLoading"
                    class="d-flex flex-row justify-center align-center pb-8 loader"
                  >
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                  <v-slide-x-transition v-if="!isLoading" mode="out-in" appear>
                    <WithdrawComp absolute :withdraw="withdraw" />
                  </v-slide-x-transition>
                </template>

                <template v-if="tab === 2">
                  <div
                    v-if="isLoading"
                    class="d-flex flex-row justify-center align-center pb-8 loader"
                  >
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                  <v-slide-x-transition v-if="!isLoading" mode="out-in" appear>
                    <HistoryComp absolute :history="history" />
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
      deposit: [
        {
          id: "1",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          sender: "BCA - 5855141016/Muhammad Rizky Firdaus",
          receiver: "BCA - 5855141016/Muhammad Rizky Firdaus",
          amount: "Rp. 20000",
          status: "success",
          note: "-",
        },
        {
          id: "2",
          date: "Senin,24 April 2023 Pukul 17.30 WIB",
          sender: "BCA - 5855141016/Muhammad Rizky Firdaus",
          receiver: "BCA - 5855141016/Muhammad Rizky Firdaus",
          amount: "Rp. 30000",
          status: "rejected",
          note: "-",
        },
      ],
      withdraw: [
        {
          id: "1",
          date: "Senin,24 April 2023 Pukul 17.00 WIB",
          sender: "tes",
          amount: "Rp. 20000",
          status: "success",
        },
        {
          id: "2",
          date: "Senin,24 April 2023 Pukul 17.30 WIB",
          sender: "tes",
          amount: "Rp. 30000",
          status: "rejected",
        },
      ],
      history: [
        {
          id: "1",
          date: "Senin,24 April 2023 Pukul 17.30 WIB",
          bet: "Rp. 12000",
          result: "Rp. 1200",
          amount: "Rp. 1200",
          status: "win",
          note: "-",
        },
        {
          id: "2",
          date: "Senin,24 April 2023 Pukul 18.30 WIB",
          bet: "Rp. 12000",
          result: "- Rp. 2400",
          amount: "Rp. 2400",
          status: "lose",
          note: "-",
        },
      ],
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
