<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pt-6">
        <v-card
          color="dark"
          elevation="0"
          class="mx-auto mt-4 mb-0 pa-3 d-flex flex-row align-center"
          style="max-width: 550px; width: 100%; border-radius: 8px"
        >
          <v-icon class="orange--text text-h5 mr-2">mdi-account</v-icon>
          <p
            class="mb-0 white--text text-p text-bold text-uppercase text-center"
          >
            Data Pribadi
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          elevation="0"
          class="mx-auto d-flex pb-3 mb-3 flex-row justify-center align-center rounded-md no-bg"
          style="max-width: 550px; width: 100%; border-radius: 8px"
        >
          <v-tabs
            v-model="tab"
            align-tabs="center"
            height="50"
            class="rounded tab-simple tab-center no-bg"
            :show-arrows="true"
          >
            <v-tab
              :ripple="false"
              v-for="tabtitle in tabtitles"
              :key="tabtitle.id"
              class="no-hover no-bg pb-5 justify-center"
              @click.stop="loadData()"
            >
              <p class="text-p mb-0 text-uppercase text-bold grey--text">
                {{ tabtitle.name }}
              </p>
            </v-tab>

            <v-tabs-items
              v-model="tab"
              style="background-color: transparent; min-height: 350px"
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
                    <ProfileComp :profile="profile" absolute />
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
                    <ChangePasswordComp absolute />
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
                    <BankComp :banks="banks" :page="pageBank" :length="lengthBank" :pageHandler="bankPageHandler" absolute />
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
import ProfileComp from "@/components/User/Profile.vue";
import ChangePasswordComp from "@/components/User/ChangePassword.vue";
import BankComp from "@/components/User/Bank.vue";
import method from '../../utilities/axios-setup';
export default {
  name: "PersonalizationComp",
  components: {
    ProfileComp,
    ChangePasswordComp,
    BankComp,
  },
  data() {
    return {
      isLoading: true,
      tab: 0,
      pageBank: 1,
      lengthBank : 10,
      tabtitles: [
        { id: "1", name: "Profile", tag: "profile" },
        { id: "2", name: "Ganti Password", tag: "change_password" },
        { id: "3", name: "Akun Bank", tag: "bank_account" },
      ],
      banks: [],
      profile: [
        {
          id: "1",
          name: "Your name",
          saldo: "",
          avatar: "active",
          src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        },
      ],
    };
  },
  methods: {
    async bankPageHandler(page) {
      this.pageBank = page;
      await this.getHistoryBet();
    },
    async loadBank() {
      await method.get(`bank?page=${this.pageBank}`)
      .then((res) => {
        const data = res.data.data;
        const pagination = data.pagination;
        this.lengthBank = pagination.last_page;
        let arrData = [];
        data.data.forEach(row => {
          let item = {
            id: row.id,
            account: row.bank_name,
            account_name: row.account_name,
            account_number: row.account_number,
          }
          arrData.push(item);
        });
        this.banks = arrData;
      })
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
    this.loadBank()
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
  