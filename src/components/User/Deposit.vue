<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          elevation="0"
          class="mx-auto d-flex pb-3 pt-8 mb-3 flex-row justify-center align-center rounded-md no-bg"
          style="max-width: 550px; width: 100%; border-radius: 8px"
        >
          <v-tabs
            v-model="tab"
            align-tabs="center"
            height="35"
            class="rounded tab-plain tab-center"
          >
            <v-tab
              :ripple="false"
              v-for="tabtitle in tabtitles"
              :key="tabtitle.id"
              class="no-hover justify-center"
              @click.stop="loadData()"
            >
              <p class="text-p mb-0 text-capitalize text-bold grey--text">
                {{ tabtitle.name }}
              </p>
            </v-tab>

            <v-tabs-items
              v-model="tab"
              style="background-color: transparent; min-height: 350px"
              class="mt-4"
            >
              <v-tab-item
                v-for="tabtitle in tabtitles"
                :key="tabtitle.id"
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
                    <AddDepositComp />
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
                  ><AddWithdrawComp />
                  </v-slide-x-transition>
                </template>

                <template v-if="tab === 2">
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
                    <LastTransactionComp :lasttrans="lasttrans" />
                  </v-slide-x-transition>
                </template>

                <template v-if="tab === 3">
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
                    <BankComp :banks="banks" />
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
import AddDepositComp from "@/components/User/AddDeposit.vue";
import AddWithdrawComp from "@/components/User/AddWithdraw.vue";
import LastTransactionComp from "@/components/Transactions/LastTransaction.vue";

import BankComp from "@/components/User/Bank.vue";
export default {
  name: "DepositComp",
  components: {
    LastTransactionComp,
    AddDepositComp,
    AddWithdrawComp,
    BankComp,
  },
  data() {
    return {
      isLoading: true,
      tab: 0,
      tabtitles: [
        { id: "1", name: "Deposit", tag: "deposit" },
        { id: "2", name: "Withdraw", tag: "withdraw" },
        { id: "3", name: "Transaksi Terakhir", tag: "last_transaction" },
        { id: "4", name: "Info AKun", tag: "account_info" },
      ],
      banks: [
        {
          id: "1",
          account: "BCA",
          account_name: "Your name",
          account_number: "111222333",
        },
        {
          id: "2",
          account: "Mandiri",
          account_name: "Your name",
          account_number: "111222333",
        },
        {
          id: "3",
          account: "Gopay",
          account_name: "Your name",
          account_number: "111222333",
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
      lasttrans: [
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
    