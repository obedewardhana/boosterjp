<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          color="dark"
          elevation="0"
          class="mx-auto mt-4 mb-4 pa-3 d-flex flex-row align-center"
          style="max-width: 550px; width: 100%; border-radius: 8px"
        >
          <v-icon class="orange--text text-h5 mr-2">mdi-pen</v-icon>
          <p
            class="mb-0 white--text text-p text-bold text-uppercase text-center"
          >
            Daftar
          </p>
        </v-card>
        <v-card
          color="white"
          elevation="0"
          class="mx-auto mt-4 mb-4 pa-3 d-flex flex-column align-center"
          style="max-width: 550px; width: 100%; border-radius: 8px"
        >
          <v-img
            width="100"
            height="100"
            src="@/assets/img/icon-success.png"
          ></v-img>
          <p class="mt-4 text-h5 mb-0 black--text text-bold text-uppercase">
            PENDAFTARAN BERHASIL
          </p>
          <p
            class="text-h6 mb-5 black--text text-center text-medium text-uppercase"
          >
            SELAMAT BERGABUNG DI BUNTUNGHOKI
          </p>
          <p class="text-p text-uppercase" v-for="pr in profile" :key="pr.id">
            {{ pr.username }}
          </p>
          <p class="text-p mb-0 text-medium text-center black--text">
            Dapatkan berbagai macam kemudahan untuk produk layanan kami
          </p>
          <p class="text-p text-medium text-center orange--text">
            Pastikan nama anda sudah benar sebelum melakukan transaksi
          </p>
        </v-card>
        <v-card
          color="transparent"
          elevation="0"
          class="mx-auto mt-4 mb-4 d-flex flex-row align-center"
          style="max-width: 550px; width: 100%; border-radius: 8px"
        >
          <v-btn
            class="pl-5 pr-5 pt-6 pb-6 text-uppercase hover-transparent"
            dark
            style="width: calc(50% - 15px); margin-right: 15px"
            >Ubah Profil</v-btn
          >
          <v-btn
            class="pl-5 pr-5 pt-6 mr-2 pb-6 text-uppercase white--text hover-transparent"
            color="orange"
            style="width: 50%"
            >Deposit</v-btn
          >
        </v-card>
        <p
          role="button"
          class="text-p text-center text-uppercase blue--text"
          @click.stop="$router.push('/dashboard').catch(() => {})"
        >
          Nanti Saja
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "SuccessComp",
  props: {
    profile: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
