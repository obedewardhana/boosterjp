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
              class=""
            >
              <p class="text-p mb-0 text-uppercase text-medium grey--text">
                {{ transcategorie.name }}
              </p>
            </v-tab>

            <v-tabs-items v-model="tab" >
              <v-tab-item
                v-for="transcategorie in transcategories"
                :key="transcategorie.id"
                class="overflow-auto pt-5"
              >
                <template v-if="tab === 0">
                  <DepositComp :deposit="deposit" />
                </template>

                <template v-if="tab === 1">
                  <WithdrawComp :withdraw="withdraw" />
                </template>

                <template v-if="tab === 2">
                  <HistoryComp :history="history" />
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
    WithdrawComp
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
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
