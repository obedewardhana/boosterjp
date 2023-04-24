<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex mb-3 align-center justify-start">
          <v-icon large class="orange--text mr-3">mdi-currency-usd</v-icon>
          <p class="text-h5 black--text text-medium mb-0">Transaksi Anda</p>
        </div>
        <v-card
          elevation="0"
          white
          class="d-flex pl-3 pr-3 pb-3 pt-3 flex-row justify-space-between align-center rounded-md"
        ><v-tabs
          v-model="tab"
          height="70"
          background-color="white"
          center-active
          class="rounded"
          :show-arrows="true"
        >
          <v-tab
            :ripple="false"
            v-for="transcategorie in transcategories"
            :key="transcategorie.id"
            class=""
          >
          <p class="text-p text-uppercase text-medium grey--text">{{ transcategorie.name }}</p>
          </v-tab>

          <v-tabs-items v-model="tab" >
            <v-tab-item
              style="padding: 25px 35px"
              :transition="false"
            >
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
export default {
  name: "UserTransactionComp",
  data() {
    return {
      isLoading: true,
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
